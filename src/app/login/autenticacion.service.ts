import { Injectable } from '@angular/core';
import { Autenticacion } from './autenticacion';
import { Observable } from 'rxjs';
import { InformacionAutorizacion } from './informacion-autorizacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private autenticarseUrl = environment.apiUrl + '/api/autenticacion';

  constructor(private http: HttpClient) { }

  public autenticar(autenticacion: Autenticacion): Observable<InformacionAutorizacion> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post<InformacionAutorizacion>(this.autenticarseUrl, JSON.stringify(autenticacion), httpOptions);
  }

}
