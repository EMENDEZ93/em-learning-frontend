import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  constructor(private http: HttpClient) { }

  endpoint = environment.apiUrl;

  public obtenerTemas():  Observable<string[]> { 
    return this.http.get<string[]>(this.endpoint+"/api/present/verb/temas/edwin.mendez@em.com.co");
  }
  

}
