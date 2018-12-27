import { Component, OnInit } from '@angular/core';
import { PresentService } from './service/verb/present/present.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {

  constructor(public presentService: PresentService) { }

  present_verb: any;
  input_verb: any;

  ngOnInit() {
    this.presentService.getPresent().subscribe(
      (verb) => {
        this.present_verb = verb.verb;
        console.log(verb);
      },
      (error) => {

      }
    );
  }

  somethingChanged(input){
    if( input == this.present_verb ){
      console.log("*********************");
      console.log(input);
      console.log(this.present_verb);
    }
  } 


}
