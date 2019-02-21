import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresentExampleService {
  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:9000/api/practice/present/example/verb/';

  public getRandomExampleVerb(verb){
    return this.http.get(this.endpoint + verb);
  }

  public getChangePresentExampleVerbLearned(auxiliaryId){
    return this.http.get(this.endpoint + '/learned/' + auxiliaryId);
  }

}
