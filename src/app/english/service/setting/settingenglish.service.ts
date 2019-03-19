import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingEnglishService {

  private endpoint = 'http://localhost:9000/api/english/setting/';

  constructor(private http: HttpClient) { }

  public getRepeatToLearnedVerbNumber(){
    return this.http.get(this.endpoint + 'repeat/verb/learned')
  }

  public getRepeatToLearnedPresentExampleVerbNumber(){
    return this.http.get(this.endpoint + 'repeat/present/example/verb/learned')
  }

  public getRepeatToReviewPresentVerbNumber(){
    return this.http.get(this.endpoint + 'repeat/review/present/verb/learned')
  }

  public getRepeatToPastVerbNumber(){
    return this.http.get(this.endpoint + 'repeat/past/verb/learned')
  }
}
