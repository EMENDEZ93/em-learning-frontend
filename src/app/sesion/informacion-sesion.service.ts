import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InformacionPresentVerbService } from './informacion-present-verb.service';

const TOKEN_KEY = 'TokenAutorizacion';
const USUARIO_KEY = 'UsuarioAutenticado'
const AUTORIZACIONES_KEY = 'Autorizaciones'; 
const CORREO_KEY = 'Correo'; 

@Injectable({
  providedIn: 'root'
})
export class InformacionSesionService extends InformacionPresentVerbService {

  private roles: Array<string> = [];
  constructor(private router: Router) {
    super();
   }

  public cerrarSession(){
    window.sessionStorage.clear();
  }

  public guardarToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public obtenerToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public guardarUsuario(usuario: string){
    window.sessionStorage.removeItem(USUARIO_KEY);
    window.sessionStorage.setItem(USUARIO_KEY, usuario);
  }

  public obtenerUsuario(): string {
    return sessionStorage.getItem(USUARIO_KEY);
  }

  public guardarAutorizaciones(autorizaciones: string[]){
    window.sessionStorage.removeItem(AUTORIZACIONES_KEY);
    window.sessionStorage.setItem(AUTORIZACIONES_KEY, JSON.stringify(autorizaciones));
  }

  public obtenerAutorizaciones(): string[] {
    this.roles = [];

    if(sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTORIZACIONES_KEY)).forEach(autorizacion => {
        this.roles.push(autorizacion.autorizacion);
      });
    }

    return this.roles;
  }

  public requiereIniciarSesion(){
    //if(!this.obtenerToken()){
    //  this.router.navigate(['/login']);
    //}  
  }
  
  public guardarCorreo(correo: string){
    window.sessionStorage.removeItem(CORREO_KEY);
    window.sessionStorage.setItem(CORREO_KEY, correo);
  }

  public obtenerCorreo(): string {
    return sessionStorage.getItem(CORREO_KEY);
  }

}
