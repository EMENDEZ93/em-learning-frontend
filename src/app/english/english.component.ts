import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PresentService } from './service/verb/present/present.service';
import { VerbModel } from './model/verb/verb';
import { VerbConst } from './constant/verb/verbconst';
import { NgForm } from '@angular/forms';
import { InputVerb } from './model/verb/Inputverb';
import { delay } from 'rxjs/operators';
import { SettingEnglishService } from './service/setting/settingenglish.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent {

  @ViewChild('verbform') verbform;

  @ViewChild('inpput') inpput: ElementRef;


  constructor(public presentService: PresentService, public settingEnglishService: SettingEnglishService) { }

  current_index_example: number;
  repeat_to_learned_verb_number: any;
  repetitions_number: number;
  present_verb: any;
  input_verb: any;
  verb: any;
  entrada = {} as InputVerb;
  verbo = {} as VerbModel;
  audio: any;

  ngOnInit() {
    this.getRepeatToLearnedVerbNumber();
    this.getPresent();
  }

  @ViewChild('audioOption') audioPlayerRef;

  onAudioPlay(){  
    this.audioPlayerRef.nativeElement.load();
    this.audioPlayerRef.nativeElement.play();
  }
  

  somethingChanged(input){
    if( input == this.verbo.present && this.verbo.verify_time == VerbConst.PRESENT ){
      this.repetitions_number ++;
      this.verbform.resetForm();
      this.getChangePresentLearned(this.verb.id);    
      this.present_verb = this.verb.past.verb;
      this.verbo.verify_time = VerbConst.PAST;
      this.onAudioPlay();

    } else if( input == this.verbo.past && this.verbo.verify_time == VerbConst.PAST ) {
      this.verbform.resetForm();
      this.present_verb = this.verb.pastPartiple.verb;
      this.verbo.verify_time = VerbConst.PAST_PARTICIPLE; 
      this.onAudioPlay();

    } else if( input == this.verbo.past_participle  && this.verbo.verify_time == VerbConst.PAST_PARTICIPLE) {
      
      if(this.verbo.example_number > 0){        
        this.verbform.resetForm();
        this.present_verb = this.verbo.present_example[this.current_index_example].sentence 
        this.verbo.verify_time = VerbConst.EXAMPLES        
        this.onAudioPlay();

      } else {
        if( this.repetitions_number == this.repeat_to_learned_verb_number ){
          this.getPresent();
        } else {
          this.verbo.present = this.verb.verb;
          this.verbo.past = this.verb.past.verb;  
          this.verbo.past_participle = this.verb.pastPartiple.verb;
          this.verbo.verify_time = VerbConst.PRESENT; 
          this.present_verb = this.verbo.present ;
          this.verbform.resetForm();
        }
      }
    } else if( input == this.verbo.present_example[this.current_index_example].sentence  && this.verbo.verify_time == VerbConst.EXAMPLES) {
      this.verbform.resetForm();
    
      this.verbo.verify_time = VerbConst.EXAMPLES
    
      console.log("||||||||||||||||||||||||||||")
      console.log(this.current_index_example)
      console.log(this.verbo.example_number)


      if( this.current_index_example == this.verbo.example_number ){
        this.getPresent();
      }

      try {
        this.current_index_example ++;
        this.present_verb = this.verbo.present_example[this.current_index_example].sentence   
      }
      catch(err) {
        console.log("!1111111111111111111111")
        console.log("no hay mas ejemplos")
        this.getPresent();
      }    



    }
    
  } 

  getPresent(){
    this.presentService.getPresent().subscribe(
      (verb) => {

        console.log("*****************************")
        console.log(verb)


        this.verb = verb;
        this.verbo.present_example = this.verb.examples;
        this.verbo.present = this.verb.verb;
        this.verbo.past = this.verb.past.verb;  
        this.verbo.past_participle = this.verb.pastPartiple.verb;
        this.verbo.verify_time = VerbConst.PRESENT;
        this.verbo.example_number = this.verbo.present_example.length;
        this.present_verb = this.verbo.present ;
        this.repetitions_number = 0;
        this.current_index_example = 0;
        this.verbform.resetForm();
        this.onAudioPlay();
      
      },
      (error) => {
      }
    );
  }

  getChangePresentLearned(id){
    this.presentService.getChangePresentLearned(id);
  }

  getRepeatToLearnedVerbNumber(){
    this.settingEnglishService.getRepeatToLearnedVerbNumber().subscribe(
      (repeat_to_learned_verb_number) => {
        this.repeat_to_learned_verb_number = repeat_to_learned_verb_number;
      },(error) => {
      });
  }


  
  i : number;
  ii : number;
  
  next(){
    //this.entrada.verb = this.present_verb; 
    console.log(this.present_verb)

    this.somethingChanged(this.present_verb);
  
    }
}
