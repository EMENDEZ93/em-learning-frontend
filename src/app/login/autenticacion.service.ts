import { Injectable } from '@angular/core';
import { Autenticacion } from './autenticacion';
import { Observable } from 'rxjs';
import { InformacionAutorizacion } from './informacion-autorizacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private autenticarseUrl = 'http://192.168.1.9:81/api/autenticacion';

  constructor(private http: HttpClient, public auth: AngularFireAuth) { }

  public autenticar(autenticacion: Autenticacion): Observable<InformacionAutorizacion> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post<InformacionAutorizacion>(this.autenticarseUrl, JSON.stringify(autenticacion), httpOptions);
  }

  async login(correo: string, password: string) {
    return await signInWithEmailAndPassword(getAuth(), correo, password)

    //return this.auth.signInWithEmailAndPassword(correo, password);
  }


}
