import { Component, OnInit, ViewChild } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
import { Autenticacion } from './autenticacion';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formulario', {static: false}) formulario;

  private autenticacion: Autenticacion;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private router: Router, private autenticacionService: AutenticacionService, private informacionSesionService: InformacionSesionService) { }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  autenticar(){
    this.autenticacion = new Autenticacion(this.formulario.correo, this.formulario.contrasena);
    this.autenticacionService.autenticar(this.autenticacion).subscribe(
      (informacionSesion) =>{ 
        this.actualizarInformacionSesion(informacionSesion, this.autenticacion);
        this.OnClickFunction();
      }, (error) => {
      }        
    )
  }

  actualizarInformacionSesion(informacionSesion, autenticacion) {
   this.informacionSesionService.guardarToken(informacionSesion['valor']);
   this.informacionSesionService.guardarCorreo(autenticacion.correo)
   this.isLoginFailed = false;
   this.isLoggedIn = true; 
  }

  OnClickFunction(){
    this.router.navigate(['/home']);
  }

}
