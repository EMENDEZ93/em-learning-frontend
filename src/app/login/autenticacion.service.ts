import { Injectable } from '@angular/core';
import { Autenticacion } from './autenticacion';
import { Observable } from 'rxjs';
import { InformacionAutorizacion } from './informacion-autorizacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private autenticarseUrl = 'http://192.168.1.9:81/api/autenticacion';

  constructor(private http: HttpClient) { }

  public autenticar(autenticacion: Autenticacion): Observable<InformacionAutorizacion> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post<InformacionAutorizacion>(this.autenticarseUrl, JSON.stringify(autenticacion), httpOptions);
  }

}
