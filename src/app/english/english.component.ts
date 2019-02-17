import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PresentService } from './service/verb/present/present.service';
import { VerbModel } from './model/verb/verb';
import { VerbConst } from './constant/verb/verbconst';
import { NgForm } from '@angular/forms';
import { InputVerb } from './model/verb/Inputverb';
import { delay } from 'rxjs/operators';
import { SettingEnglishService } from './service/setting/settingenglish.service';
import { tick } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { SettingModel } from './model/verb/setting';


@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent {

  @ViewChild('verbform') verbform;
  @ViewChild('inpput') inpput: ElementRef;
  
  input = {} as InputVerb;
  verb = {} as VerbModel;
  setting_present = {} as SettingModel;

  constructor(public http: HttpClient, public presentService: PresentService, public settingEnglishService: SettingEnglishService) { }

  ngOnInit() {
    this.getRepeatToLearnedVerbNumber();
    this.getPresent();
  }

  @ViewChild('audioOption') audioPlayerRef;

  onAudioPlay(){  
    this.audioPlayerRef.nativeElement.load();
    this.audioPlayerRef.nativeElement.play();
  }

  inputWord(input){ 
    this.compareToInputAndVerb(input);
  } 

  getPresent(){
    this.presentService.getPresent().subscribe(
      (randomVerb) => {
        this.toAssignToVerb(randomVerb);
        this.onAudioPlay()
      }, (error) => {
        console.log(error)
      } 
    )
  }

  toAssignToVerb(randomVerb){
    this.verb.id = randomVerb["id"];
    this.verb.present = randomVerb["verb"];
    this.verb.mp3Path = this.toAssignMp3ToVerb(this.verb.present); 
    this.verb.repeatToLearnedVerbNumber = 0;
  }

  compareToInputAndVerb(input) {
    if(input == this.verb.present){
      this.verbform.resetForm();
      this.validateRepetitions();    
    }
  }  

  toAssignMp3ToVerb(verb): string {
    if( this.http.get("assets/resources/english/verb/present/"+ verb +"/" + verb + ".mp3") ){
      return "assets/resources/english/verb/present/"+ verb +"/" + verb + ".mp3";
    }
    return "";
  }

  getRepeatToLearnedVerbNumber() {
    this.settingEnglishService.getRepeatToLearnedVerbNumber().subscribe(
      (repeatToLearnedVerbNumber) => {
        this.setting_present.repeatToLearnedVerbNumber = repeatToLearnedVerbNumber; 
      }, (error) => {
      }
    )
  }

  validateRepetitions(){
    if(this.verb.repeatToLearnedVerbNumber == this.setting_present.repeatToLearnedVerbNumber) {
      this.getChangePresentLearned(this.verb.id);
      this.getPresent();
    }
    this.onAudioPlay()    
    this.verb.repeatToLearnedVerbNumber ++;
  }

 getChangePresentLearned(verb_id) {
    this.presentService.getChangePresentLearned(verb_id).subscribe(
      (res) => {
      }, (error) => {
      }
    );
 }

}
