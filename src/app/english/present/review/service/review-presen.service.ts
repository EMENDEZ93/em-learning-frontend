import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PresentReviewCommand } from '../command/present-review-command';

@Injectable({
  providedIn: 'root'
})
export class ReviewPresenService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:9000/api/practice/review/present/';
              

  public getReviewPresent(username){
    return this.http.get(this.endpoint + username);
  }

  public postChangeReviewPresentLearned(presentReviewCommand: PresentReviewCommand) {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};

    this.http.post(this.endpoint + "learned", JSON.stringify(presentReviewCommand), httpOptions).subscribe(
      (suc) => {
      },(error) => {
        console.log(error)
      }
    );
 
  }

}
