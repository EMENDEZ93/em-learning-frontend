import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresentService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://192.168.1.55:9000/api/practice/';

  private extractData(res: Response) { 
    let body = res;
    return body || {};
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
    };
  }

  public getPresent(){
    return this.http.get(this.endpoint + 'present');
  }

  public getChangePresentLearned(id){
    return this.http.get(this.endpoint + 'present/learned/' + id);
  }

}
