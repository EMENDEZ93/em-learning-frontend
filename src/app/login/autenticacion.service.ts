import { Injectable } from '@angular/core';
import { Autenticacion } from './autenticacion';
import { Observable } from 'rxjs';
import { InformacionAutorizacion } from './informacion-autorizacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private autenticarseUrl = 'http://localhost:8081/api/autenticacion';

  constructor(private http: HttpClient) { }

  public autenticar(autenticacion: Autenticacion): Observable<InformacionAutorizacion> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post<InformacionAutorizacion>(this.autenticarseUrl, JSON.stringify(autenticacion), httpOptions);
  }

}
