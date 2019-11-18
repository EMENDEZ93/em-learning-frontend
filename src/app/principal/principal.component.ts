import { Component, OnInit } from '@angular/core';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { Router } from '@angular/router';
import { TemasService } from './temas.service';
import { InformacionInicialSistema } from '../informacion-inicial-sistema';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  name_content: string;
  tabSeleccionado: any;
  temas : any = [];
  
  constructor(private router: Router, private informacionSesionService: InformacionSesionService, private temasService: TemasService, private informacionInicialSistema: InformacionInicialSistema) { }

  ngOnInit() {
    this.informacionSesionService.requiereIniciarSesion();
    this.temas = JSON.parse(this.informacionInicialSistema.obtenerTemas()); 
  }

  content(tabSeleccionado){
    this.tabSeleccionado = tabSeleccionado; 
  }

  public cerrarsesion(){
    this.informacionSesionService.cerrarSession();
    this.router.navigate(['/login']);
  }

}
