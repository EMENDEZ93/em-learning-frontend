import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Registrer } from '../login/register';
@Injectable({
  providedIn: 'root'
})
export class RegistrerService {

  private autenticarseUrl = 'https://boiling-forest-31476.herokuapp.com/api/present/verb/perfil';

  constructor(private http: HttpClient, public auth: AngularFireAuth) { }

  public register(perfil: Registrer): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post<void>(this.autenticarseUrl, JSON.stringify(perfil), httpOptions);
  }

  crearUsuario(nombre:string, correo:string, password:string) {
    return this.auth.auth.createUserWithEmailAndPassword(correo, password);
  }


}
