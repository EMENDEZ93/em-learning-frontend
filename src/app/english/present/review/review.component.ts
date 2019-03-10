import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InputReviewVerb } from './input-review-verb';
import { ReviewVerbModel } from './review-verb-model';
import { ReviewSettingModel } from './review-setting-model';
import { TokenStorageService } from 'src/app/security/auth/token-storage.service';
import { ReviewPresenService } from './service/review-presen.service';
import { HttpClient } from '@angular/common/http';
import { VerbConst } from '../../constant/verb/verbconst';
import { PresentReviewCommand } from './command/present-review-command';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  info: any;

  @ViewChild('review_verb_form') verbform;
  @ViewChild('input_review') inpput: ElementRef;

  @ViewChild('reviewPresentAudioOption') audioPlayerRef;

  input = {} as InputReviewVerb;
  verb = {} as ReviewVerbModel;
  setting_review_present = {} as ReviewSettingModel;
  message: string;
  presentReviewCommand = {} as PresentReviewCommand;


  constructor(public http: HttpClient,private token: TokenStorageService, private reviewPresenService: ReviewPresenService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };  
  }

  onReviewPresentAudioPlay(){  
    this.audioPlayerRef.nativeElement.load();
    this.audioPlayerRef.nativeElement.play();
  }

  getReviewPresent(){
    this.reviewPresenService.getReviewPresent(this.info.username).subscribe(
      (reviewPresent) => {
        console.log("************************")
        console.log(reviewPresent)
        this.toAssignToReviewVerb(reviewPresent);
        this.onReviewPresentAudioPlay()

      }, (error) => {

      }
    )
  }

  toAssignToReviewVerb(reviewPresent){
    this.verb.id = reviewPresent["id"];
    this.verb.review_present = reviewPresent["verb"];
    this.verb.current_status = VerbConst.PRESENT;
    this.verb.mp3Path = this.toAssignMp3ToVerb(this.verb.review_present);
  }

  toAssignMp3ToVerb(verb): string {
    if( this.http.get("assets/resources/english/verb/present/"+ verb +"/" + verb + ".mp3") ){
      return "assets/resources/english/verb/present/"+ verb +"/" + verb + ".mp3";
    }
    return "";
  }

  inputReviewVerbWord(input){ 
    this.compareToInputAndReviewVerb(input);
  }

  compareToInputAndReviewVerb(input) {

    if(input == this.verb.review_present && this.verb.current_status == VerbConst.PRESENT){
      this.verbform.resetForm();
      this.validateRepetitions();    
    }

    if(input == this.verb.examples && this.verb.current_status == VerbConst.EXAMPLES){
      //this.getChangePresentExampleVerbLearned(this.verb.auxiliary_id);  
      this.verbform.resetForm();
      //this.getRandomExampleVerb(this.verb.present);
    }
  } 

  validateRepetitions(){
    //if(this.verb.repeatToLearnedVerbNumber == this.setting_present.repeatToLearnedVerbNumber) {
      this.changeReviewPresentLearned();
    //  this.getRandomExampleVerb(this.verb.present);
    //}
    //this.onAudioPlay()    
    //this.verb.repeatToLearnedVerbNumber ++;
  }
  
  changeReviewPresentLearned(){
    this.presentReviewCommand.verbId = this.verb.id;
    this.presentReviewCommand.verb = this.verb.review_present;
    this.presentReviewCommand.username = this.info.username;

    this.reviewPresenService.postChangeReviewPresentLearned(this.presentReviewCommand);
  }


}
