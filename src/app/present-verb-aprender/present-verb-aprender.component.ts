import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PresentVerbAprenderService } from './present-verb-aprender.service';
import { ActualizarPerfilPresentVerb } from './actualizar-perfil-present-verb';
import { AudioService } from '../comun/audio/audio.service';
import { Store } from '@ngrx/store';
import { AppState } from '../dominio/estado/estado.reducer';
import { actualizarHoja } from '../dominio/usuario/usuario.actions';
import { Usuario } from '../dominio/usuario/usuario.model';
import { DatePipe } from '@angular/common';

export interface Brand {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-present-verb-aprender',
  templateUrl: './present-verb-aprender.component.html',
  styleUrls: ['./present-verb-aprender.component.css']
})
export class PresentVerbAprenderComponent implements OnInit {

  actualizarPerfilPresentVerb: ActualizarPerfilPresentVerb;

  @Input() hojaTemaExcel: any;
  @ViewChild('formulario', { static: false }) formulario;

  usuario: Usuario;
  hojaActual: string = "";

  verboEntrada: string;
  spanishVerbo: string;
  englishVerbo: string;
  repeticionesAltaComoAprendidoTemporal = 0;
  barraProgreso = 0;
  colorBarraProgreso = 'alert alert-danger';
  colorSegunValidacionClass = 'border border-primary validacionVacia';
  hoyYaRealizoAprender = true;
  numeroPalabras = 0;
  cantidadVerbosReproducir = 0;
  patt1 = /\w+/g;

  constructor(
    public http: HttpClient,
    private presentVerbService: PresentVerbAprenderService,
    private audioService: AudioService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('usuario').subscribe(
      usuario => {
        this.usuario = usuario;
      }
    );
  }

  getRutina() {
    this.store.select('usuario').subscribe(
      usuario => {
        if (this.isEmpty(this.usuario) || this.isEmpty(this.usuario.sistema.hojaSeleccionado.aprender) || this.hojaActual !== usuario.sistema.hojaSeleccionado.nombre) {
          this.hojaActual = usuario.sistema.hojaSeleccionado.nombre;
          this.usuario = usuario;
          this.presentVerbService.getRutinaByConfiguration(usuario.sistema).subscribe(
            (aprender) => {
              aprender.numeroVerbosAprender = aprender.english.length;
              aprender.indiceVerboRetrocesoTemporal = 0;
              aprender.indiceVerboValidar = 0;
              aprender.indicesVerbosAprendidos = [];
              usuario.sistema.hojaSeleccionado.aprender = aprender;
              usuario.sistema.hojaSeleccionado.tipo = "A";
              this.barraProgreso = 0;
              this.repeticionesAltaComoAprendidoTemporal = 0;
              this.hoyYaRealizoAprender = usuario.sistema.hojaSeleccionado.realizadoHoy;
              this.ingresarInformacionAprender()
            }, (error) => {
              console.log("*****************************************")
              console.log(error)
             }
          )
        } 
      }
    );
  }

  isEmpty(obj) {
    if (obj === undefined) return true;
    return Object.keys(obj).length === 0;
  }

  validarVerboEntredaConVerboPorAprender(verboEntrada) {
    if (this.estaRutinaCompletada()) {
      this.actualizacionPerfil();
    } else if (this.esIgualVerbEntradaVerboRutina(verboEntrada)) {
      this.configuracionAprender();
      if (this.estaRutinaCompletada()) {
        this.actualizacionPerfil();
      }
    }
  }

  private actualizacionPerfil() {
    this.presentVerbService.getUpdateHojaById(this.usuario.sistema.hojaSeleccionado.id).subscribe(
      (hoja) => {
          this.usuario.sistema.hojaSeleccionado = hoja;
          this.store.dispatch(actualizarHoja({hojaSeleccionado: this.usuario.sistema.hojaSeleccionado}) )
          this.hoyRealizoAprender();
            },
      (error) => {
        console.log("************************************************")
        console.log(error)
      }
    );
  }

  private configuracionAprender() {
    this.formulario.resetForm();
    this.obtenerSiguienteIndice();

    if(this.usuario.sistema.hojaSeleccionado.aprender.orden) {
      if(this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal > 0) {
        this.verboEntrada = this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal - 1]
      }
    }

    this.reproducir();
  }

  private esIgualVerbEntradaVerboRutina(verboEntrada: any) {
    this.obtenerNumerosPalabras();
    return verboEntrada.toUpperCase() == this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal].toUpperCase();
  }

  ingresarInformacionAprender() {
    this.reproducir();
  }

 /* obtenerSiguienteIndice() {
    if (!this.estaRutinaCompletada()) {
      if (this.esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar()) {
        if (this.esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido()) {
          this.actualizarVerbosAprendidos();
          this.actualizarBarraProgreso();
          this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboValidar++;
          this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal = 0;
        } else {
          this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal++;
        }

      } else {
        this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal++;
        console.log("this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal")
        console.log(this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal)
      }

    } else {
      console.log('------- Rutina Completada 2 --------')
    }
  }*/


  obtenerSiguienteIndice() {
    if (!this.estaRutinaCompletada()) {
      if (this.esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar()) {
        if (this.esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido()) {
          this.actualizarVerbosAprendidos();
          this.actualizarBarraProgreso();
          this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboValidar++;
          this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal++;
          this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal++;
        
        } else {
          //this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal++;
        }

      } else {
        this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal++;
      }

    } else {
      console.log('------- Rutina Completada 2 --------')
    }
  }

  private esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido() {
    return this.repeticionesAltaComoAprendidoTemporal == this.usuario.sistema.hojaSeleccionado.repeticionesAltaComoAprendido;
  }


  esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar() {
    return this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal == this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboValidar;
  }

  estaRutinaCompletada() {
    if(!this.isEmpty(this.usuario.sistema.hojaSeleccionado.aprender)) {
      const rutinaCompletada = Array.from({ length: this.usuario.sistema.hojaSeleccionado.aprender.numeroVerbosAprender }, (v, k) => k);
      const rutinaActual = this.usuario.sistema.hojaSeleccionado.aprender.indicesVerbosAprendidos;
      if (this.isEmpty(rutinaActual)) {
        return false;
      }
      return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
    } else {
      return true;
    }
  }

  actualizarVerbosAprendidos() {
    this.usuario.sistema.hojaSeleccionado.aprender.indicesVerbosAprendidos.push(this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboValidar);
  }

  reproducir() {
    if (!this.hoyRealizoAprender()) {
      this.audioService.reproducir(this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]);
      this.spanishVerbo = this.usuario.sistema.hojaSeleccionado.aprender.spanish[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.englishVerbo = this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.obtenerNumerosPalabras();
    }
  }

  reproducirSiguientePalabra() {
    this.audioService.reproducir(this.obtenerSiguientePalabra());
  }

  obtenerSiguientePalabra() {
    var arrayEsperado = this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal].match(this.patt1);
    var arrayActual = this.verboEntrada == null || this.verboEntrada.trim() == '' ? [''] : this.verboEntrada.match(this.patt1);

    let i;
    let verbos = '';

    for (i = 0; i < arrayEsperado.length; i++) {
      if (i >= arrayActual.length) {
        break;
      }
      if (arrayEsperado[i].toUpperCase() != arrayActual[i].toUpperCase()) {
        break;
      }
    }

    for (let x = i; x < (parseInt(i) + parseInt(this.cantidadVerbosReproducir.toString()) + 1); x++) {
      verbos = verbos + arrayEsperado[x] + ' ';
    }
    return verbos;

  }

  hoyRealizoAprender(): boolean {
    this.hoyYaRealizoAprender = this.estaRutinaCompletada() || this.ultimaFechaAprendidaEsHoy();
    return this.hoyYaRealizoAprender;
  }

  actualizarBarraProgreso() {
    this.barraProgreso = (this.usuario.sistema.hojaSeleccionado.aprender.indicesVerbosAprendidos.length / this.usuario.sistema.hojaSeleccionado.aprender.numeroVerbosAprender) * 100;
  }

  activarAyuda = false
  palabraActual = '';
  mostrarAyuda() {
    this.activarAyuda = true
    this.palabraActual = this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboValidar];
    setTimeout(() => {
      this.activarAyuda = false
    }, 3000)
  }

  mostrarSiguientePalabra() {
    this.activarAyuda = true
    this.palabraActual = this.obtenerSiguientePalabra();
    setTimeout(() => {
      this.activarAyuda = false
    }, 3000)
  }

  colorSegunValidacion(verboEntrada) {
    if (verboEntrada.trim() == "") {
      this.colorSegunValidacionClass = 'border border-primary validacionVacia';
    } else if (this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal].toUpperCase().includes(verboEntrada.toUpperCase())) {
      this.colorSegunValidacionClass = 'border border-success validacionExitosa';
    } else {
      this.colorSegunValidacionClass = 'border border-danger validacionError';
    }
  }

  obtenerNumerosPalabras() {
    this.hoyYaRealizoAprender = this.usuario.sistema.hojaSeleccionado.realizadoHoy;
    if(!this.hoyYaRealizoAprender) {
      this.hoyYaRealizoAprender = this.usuario.sistema.hojaSeleccionado.aprender.english.length <= 0;
    }
    
    if (!this.usuario.sistema.hojaSeleccionado.realizadoHoy && this.usuario.sistema.hojaSeleccionado.aprender.english.length > 0 ) {
      var arrayEsperado = this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal].match(this.patt1);
      var arrayActual = this.verboEntrada == null || this.verboEntrada.trim() == '' ? [''] : this.verboEntrada.match(this.patt1);
      let i;
      let verbos = '';
      for (i = 0; i < arrayEsperado.length; i++) {
        if (i >= arrayActual.length) {
          break;
        }
        if (arrayEsperado[i].toUpperCase() != arrayActual[i].toUpperCase()) {
          break;
        }
      }
      this.numeroPalabras = arrayEsperado.length - i;
    }
  }

  public ultimaFechaAprendidaEsHoy(): boolean {
    return new Date(this.transformarDate(this.usuario.sistema.hojaSeleccionado.ultimaFechaAprendio) ) >= new Date(  this.transformarDate(Date.now()) );
  }

  private transformarDate(date){
    return new DatePipe('en-LA').transform(date, 'shortDate'); 
  }

}