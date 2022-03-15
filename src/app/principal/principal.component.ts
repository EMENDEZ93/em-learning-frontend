import { Component, OnInit } from '@angular/core';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../dominio/estado/estado.reducer';
import { actualizarExcel, actualizarHoja, actualizarAccion } from '../dominio/usuario/usuario.actions';
import { PresentVerbAprenderService } from '../present-verb-aprender/present-verb-aprender.service';
import { Usuario } from '../dominio/usuario/usuario.model';
import { Excel } from '../dominio/excel/excel.model';
import { Hoja } from '../dominio/hoja/hoja.model';
import { DatePipe } from '@angular/common';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario: Usuario = new Usuario();
  tabSeleccionado: number = 0;

  constructor(private router: Router, 
    private informacionSesionService: InformacionSesionService,
    private store: Store<AppState>,
    private presentVerbService: PresentVerbAprenderService
  ) { }

  ngOnInit() {
    this.actualizarUsuario();
  }

  public cerrarsesion(){
    this.informacionSesionService.cerrarSession();
    this.router.navigate(['/login']);
  }

  colorSegunValidacion(ultimaFechaAprendio: Date) {
    if (this.ultimaFechaAprendidaEsHoy(ultimaFechaAprendio)) {
      return 'btn-success';
    } else if (!this.ultimaFechaAprendidaEsHoy(ultimaFechaAprendio)) {
      return 'btn-primary';
    }
  }

  colorSegunValidacionRutina(ultimaFechaRutina: Date) {
    if (this.ultimaFechaAprendidaEsHoy(ultimaFechaRutina)) {
      return ' outset';
    } else if (!this.ultimaFechaAprendidaEsHoy(ultimaFechaRutina)) {
      return '';
    }
  }

  colorSegunValidacionSpeaking(ultimaFechaRutina: Date) {
    if (this.ultimaFechaAprendidaEsHoy(ultimaFechaRutina)) {
      return ' outsetspeaking';
    } else if (!this.ultimaFechaAprendidaEsHoy(ultimaFechaRutina)) {
      return '';
    }
  }

  actualizarUsuario() {
    this.store.select('usuario').subscribe(
      usuario => {
        this.usuario = usuario;
      }
    );
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  selectedExcel(excel: Excel) {
    this.presentVerbService.getHojasByExcelAndCorreo(excel.archivo, this.usuario.correo).subscribe(
      hojas => {
        excel.hojas = hojas;
        this.usuario.sistema.excelSeleccionado = excel;
        this.store.dispatch(actualizarExcel({ excelSeleccionado: excel }));
      }
    );
  }

  selectedHoja(hoja: Hoja) {
    if( undefined === this.usuario.sistema.hojaSeleccionado.nombre ||
        hoja.nombre !== this.usuario.sistema.hojaSeleccionado.nombre ) {
      this.usuario.sistema.hojaSeleccionado = hoja;
      this.store.dispatch(actualizarHoja({ hojaSeleccionado: hoja }));  
    }

  }

  public ultimaFechaAprendidaEsHoy(ultimaFechaAprendio: Date): boolean {
    return new Date(this.transformarDate(ultimaFechaAprendio) ) >= new Date(  this.transformarDate(Date.now()) );
  }

  private transformarDate(date){
    return new DatePipe('en-LA').transform(date, 'shortDate'); 
  }

  getClassPorRutina(hoja: Hoja) {
    if(hoja.porRutina == true) {
      return "spinner-grow spinner-grow-sm"
    }
    return "";
  }

  getClassSpeaking(hoja: Hoja) {
    if(hoja.speaking == true) {
      return "spinner-grow spinner-grow-sm"
    }
    return "";
  }

  getClassSelectedExcel(excel: Excel) {
    if(this.usuario.sistema.excelSeleccionado.nombre === excel.nombre) {
      return "btn btn-secondary";
    } else {
      return "btn-primary";
    }
  }

  getHojasPorRutina(excel: Excel) {
  var contador = 0;
    if(excel.hojas != null) {
      excel.hojas.forEach(hoja => {
        if(hoja.porRutina) {
          contador++;
        }
      })
        return "     " + contador.toString();
    }
    return "";
  }

  public selectTab(event: MatTabChangeEvent): void {
    this.tabSeleccionado = event.index;
  }

  ocultarTab(tab: number):string {
    if(this.tabSeleccionado === tab) {
      return "";
    } else {
      return "display: none";
    }
  }







  openPage(pageName, accion) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    console.log(tabcontent);

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.cssText = "display:none;";
      //tabcontent[i].style.cssText = "visibility: hidden;";
    }

    document.getElementById(pageName).style.cssText = "display:block;";

    this.store.dispatch(actualizarAccion({ accion: accion }));  

    
  }











}
