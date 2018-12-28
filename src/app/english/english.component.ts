import { Component, OnInit, ViewChild } from '@angular/core';
import { PresentService } from './service/verb/present/present.service';
import { VerbModel } from './model/verb/verb';
import { VerbConst } from './constant/verb/verbconst';
import { NgForm } from '@angular/forms';
import { InputVerb } from './model/verb/Inputverb';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent {

  @ViewChild('verbform') verbform;

  constructor(public presentService: PresentService) { }

  present_verb: any;
  input_verb: any;
  verb: any;

  entrada = {} as InputVerb;
  
  verbo = {} as VerbModel;

  ngOnInit() {
    this.presentService.getPresent().subscribe(
      (verb) => {
        this.verb = verb;

        this.verbo.present = this.verb.verb;
        this.verbo.past = this.verb.past.verb;  
        this.verbo.past_participle = this.verb.pastPartiple.verb;
        this.verbo.verify_time = VerbConst.PRESENT; 

        this.present_verb = this.verbo.present ;

        this.verbform.resetForm();
      },
      (error) => {

      }
    );
  }

  somethingChanged(input){
    if( input == this.verbo.present && this.verbo.verify_time == VerbConst.PRESENT ){
      this.verbform.resetForm();
      this.getChangePresentLearned(this.verb.id);    
      this.present_verb = this.verb.past.verb;
      this.verbo.verify_time = VerbConst.PAST;
      
    } else if( input == this.verbo.past && this.verbo.verify_time == VerbConst.PAST ) {
      this.verbform.resetForm();
      this.present_verb = this.verb.pastPartiple.verb;
      this.verbo.verify_time = VerbConst.PAST_PARTICIPLE; 
      
    } else if( input == this.verbo.past_participle  && this.verbo.verify_time == VerbConst.PAST_PARTICIPLE) {
      this.ngOnInit();
    }
    
  } 

  getChangePresentLearned(id){
    this.presentService.getChangePresentLearned(id);
  }

}
