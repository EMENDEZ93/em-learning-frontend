import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:9000/api/practice/';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
    };
  }

  public getPresent(userId){
    return this.http.get(this.endpoint + 'present/' + userId);
  }

  public getChangePresentLearned(id){
    return this.http.get(this.endpoint + 'present/learned/' + id);
  }

}
