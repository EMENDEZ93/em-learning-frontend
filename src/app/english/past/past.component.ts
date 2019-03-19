import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TokenStorageService } from 'src/app/security/auth/token-storage.service';
import { InputVerb } from '../model/verb/Inputverb';
import { VerbModel } from '../model/verb/verb';
import { SettingModel } from '../model/verb/setting';
import { SettingEnglishService } from '../service/setting/settingenglish.service';
import { PastService } from './past.service';
import { PastVerbModel } from './past-verb-model';
import { HttpClient } from '@angular/common/http';
import { VerbConst } from '../constant/verb/verbconst';
import { PastCommand } from './past-command';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  info: any;

  @ViewChild('pastVerbform') verbform;
  @ViewChild('inpput') inpput: ElementRef;

  input = {} as InputVerb;
  verb = {} as PastVerbModel;
  setting_past = {} as SettingModel;  
  pastCommand = {} as PastCommand;

  constructor(public http: HttpClient, private pastService: PastService, public settingEnglishService: SettingEnglishService, private token: TokenStorageService) { }

  ngOnInit() {
    this.getPast();
    this.getRepeatToLearnedVerbNumber();
    
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

  }

  @ViewChild('audioOption') audioPlayerRef;

  onAudioPlay(){  
    this.audioPlayerRef.nativeElement.load();
    this.audioPlayerRef.nativeElement.play();
  }

  getRepeatToLearnedVerbNumber() {
    this.settingEnglishService.getRepeatToLearnedVerbNumber().subscribe(
      (repeatToLearnedVerbNumber) => {
        this.setting_past.repeatToLearnedVerbNumber = repeatToLearnedVerbNumber; 
      }, (error) => {
      }
    )
  }


  getPast(){
    this.pastService.getPast(this.token.getUsername()).subscribe(
      (past) => {
        console.log("**************************")
        console.log(past)
        this.toAssignToPastVerb(past);
        this.onAudioPlay()
      }, (error) => {}
    )
  }

  toAssignToPastVerb(past){
    this.verb.id = past["id"];
    this.verb.past = past["verb"];
    this.verb.current_status = VerbConst.PAST;
    this.verb.mp3Path = this.toAssignMp3ToVerb(this.verb.past);
    this.verb.repeatToLearnedVerbNumber = 0;
  }

  toAssignMp3ToVerb(verb): string {
    if( this.http.get("assets/resources/english/verb/past/" + verb + ".mp3") ){
      return "assets/resources/english/verb/past/"+ verb + ".mp3";
    }
    return "";
  }

  inputWord(input){ 
    console.log("_________________________________")
    console.log(input);
    this.compareToInputAndReviewVerb(input);
  }

  compareToInputAndReviewVerb(input) {

    if(input == this.verb.past && this.verb.current_status == VerbConst.PAST){
      this.verbform.resetForm();
      this.validateRepetitions();    
    }

  } 

  validateRepetitions(){
  
    console.log("************************** > 1")
    console.log(this.verb.repeatToLearnedVerbNumber)
    console.log(this.setting_past.repeatToLearnedVerbNumber)

    
    if(this.verb.repeatToLearnedVerbNumber == this.setting_past.repeatToLearnedVerbNumber) {
      this.changePastLearned();
      this.getPast();
      console.log("************************** > 2")

    } else {
      console.log("************************** > 3")
      this.onAudioPlay();    
      this.verb.repeatToLearnedVerbNumber ++;
    }
  }

  changePastLearned(){
    this.pastCommand.verbId = this.verb.id;
    this.pastCommand.verb = this.verb.past;
    this.pastCommand.username = this.info.username;

    this.pastService.postChangePastLearned(this.pastCommand);
  }

  getRepeatToPastVerbNumber() {
    this.settingEnglishService.getRepeatToPastVerbNumber().subscribe(
      (repeatToReviewVerbNumber) => {
        this.setting_past.repeatToLearnedVerbNumber = repeatToReviewVerbNumber; 
      }, (error) => {
      }
    )
  }

}
