import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PastCommand } from './past-command';

@Injectable({
  providedIn: 'root'
})
export class PastService {

  endpoint = 'http://localhost:9000/api/past/';

  constructor(private http: HttpClient) { }

  public getPast(username){
    return this.http.get(this.endpoint + username);
  }

  postChangePastLearned(pastCommand: PastCommand) {
    console.log("postChangePastLearned");
    console.log(pastCommand);
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    this.http.post(this.endpoint + "learned", JSON.stringify(pastCommand), httpOptions).subscribe(
      (suc) => {
      },(error) => {
        console.log(error)
      }
    ); 
  }

}
