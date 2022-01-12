import { Component, OnInit } from '@angular/core';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../dominio/estado/estado.reducer';
import { actualizarExcel, actualizarHoja } from '../dominio/usuario/usuario.actions';
import { PresentVerbAprenderService } from '../present-verb-aprender/present-verb-aprender.service';
import { Usuario } from '../dominio/usuario/usuario.model';
import { Excel } from '../dominio/excel/excel.model';
import { Hoja } from '../dominio/hoja/hoja.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario: Usuario = new Usuario();

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
      return 'btn-success outset';
    } else if (!this.ultimaFechaAprendidaEsHoy(ultimaFechaAprendio)) {
      return 'btn-primary outset';
    }
  }

  colorSegunValidacionRutina(ultimaFechaRutina: Date) {
    if (this.ultimaFechaAprendidaEsHoy(ultimaFechaRutina)) {
      return '';
    } else if (!this.ultimaFechaAprendidaEsHoy(ultimaFechaRutina)) {
      return 'outset';
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
    this.usuario.sistema.hojaSeleccionado = hoja;
    this.store.dispatch(actualizarHoja({ hojaSeleccionado: hoja }));
  }

  public ultimaFechaAprendidaEsHoy(ultimaFechaAprendio: Date): boolean {
    return new Date(this.transformarDate(ultimaFechaAprendio) ) >= new Date(  this.transformarDate(Date.now()) );
  }

  private transformarDate(date){
    return new DatePipe('en-LA').transform(date, 'shortDate'); 
  }

  getClassAlert(hoja: Hoja) {
    if(hoja.porRutina == true) {
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

}
