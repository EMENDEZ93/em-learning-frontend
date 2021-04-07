import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:8081';

  public obtenerTemas():  Observable<string[]> { 
    return this.http.get<string[]>(this.endpoint+"/api/present/verb/temas/edwin.mendez@em.com.co");
  }
  

}
