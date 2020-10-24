import { Component, OnInit, Input } from '@angular/core';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { Router } from '@angular/router';
import { TemasService } from './temas.service';
import { InformacionInicialSistema } from '../informacion-inicial-sistema';
import { InformacionPresentVerbService } from '../sesion/informacion-present-verb.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  name_content: string;
  tabSeleccionado: any;
  temas : any = [];

  constructor(private router: Router, private informacionSesionService: InformacionSesionService, private temasService: TemasService, private informacionInicialSistema: InformacionInicialSistema,
              private informacionPresentVerbService: InformacionPresentVerbService) { }

  ngOnInit() {
    this.informacionSesionService.requiereIniciarSesion();
    console.log("[this.temas]")
    console.log(this.informacionSesionService.obtenerCorreo())
    this.temas = JSON.parse(this.informacionInicialSistema.obtenerTemas()); 
  }

  content(tabSeleccionado){
    console.log("[tabSeleccionado]")
    console.log(tabSeleccionado['tema'])
    this.tabSeleccionado = tabSeleccionado['tema']; 
  }

  public cerrarsesion(){
    this.informacionSesionService.cerrarSession();
    this.router.navigate(['/login']);
  }


  hoyRealizoAprender(event, componente){
    console.log("*************** Child to parent ********************")
    console.log("event -> " + event)
    console.log("componente -> " + componente)
  }

  colorSegunValidacion(realizado) {
    if (realizado) {
      return 'btn-success';
    } else if (!realizado) {
      return 'btn-primary';
    }
  }

}
