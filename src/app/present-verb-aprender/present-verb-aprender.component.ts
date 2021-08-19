import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PresentVerbAprenderService } from './present-verb-aprender.service';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { ActualizarPerfilPresentVerb } from './actualizar-perfil-present-verb';
import { AudioService } from '../comun/audio/audio.service';
import { InformacionInicialSistema } from '../informacion-inicial-sistema';
import { InformacionPresentVerbService } from '../sesion/informacion-present-verb.service';
import { Store } from '@ngrx/store';
import { AppState } from '../dominio/estado/estado.reducer';
import { Tema } from '../dominio/tema/tema.model';
import { actualizarConfiguracionTemaSeleccionado, actualizarRutinaTemaSeleccionado, temaSeleccionado } from '../dominio/usuario/usuario.actions';
import { Usuario } from '../dominio/usuario/usuario.model';
import { Rutina } from '../dominio/rutina/rutina.model';

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

  constructor(public http: HttpClient, private presentVerbService: PresentVerbAprenderService, private informacionSesionService: InformacionSesionService,
    private audioService: AudioService, private informacionPresentVerbService: InformacionPresentVerbService,
    private store: Store<AppState>) { }

  ngOnInit() {
    
  }

  obtenerRutina() {
    this.store.select('usuario').subscribe(
      usuario => {
        this.usuario = usuario; 
        if (this.isEmpty(usuario.sistema.temaSeleccionado.rutina)) {
          this.presentVerbService.obtenerRutinaByConfiguracions(usuario.sistema.temaSeleccionado).subscribe(
            (rutina) => {
              rutina.numeroVerbosAprender = rutina.english.length;
              rutina.indiceVerboRetrocesoTemporal = 0;
              rutina.indiceVerboValidar = 0;
              rutina.indicesVerbosAprendidos = [];
              usuario.sistema.temaSeleccionado.rutina = rutina;

              this.barraProgreso = 0;
              this.repeticionesAltaComoAprendidoTemporal = 0;

              this.store.dispatch(temaSeleccionado({ temaSeleccionado: usuario.sistema.temaSeleccionado }));
              this.ingresarInformacionAprender()
            }, (error) => { }
          )

        } else {
          this.ingresarInformacionAprender()
        }

      }
    )

    /*if (this.informacionSesionService.obtenerEsPreguntaRespuesta()) {
      this.presentVerbService.obtenerPreguntas(this.informacionSesionService.obtenerUltimoIndiceVerboAprendido(), this.informacionSesionService.obtenerNumeroVerbosPorAprenderDiario(), this.hojaTemaExcel).subscribe(
        (preguntas) => {
          this.informacionRutinaPresentVerb.preguntas = preguntas;
        }, (error) => { }
      )
    }*/
  }


  isEmpty(obj) {
    if(obj === undefined) return true;
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
    this.store.select('usuario').subscribe(
      usuario => {
        this.actualizarPerfilPresentVerb = new ActualizarPerfilPresentVerb();
        this.actualizarPerfilPresentVerb.nombre = usuario.sistema.temaSeleccionado.tema;
        this.actualizarPerfilPresentVerb.correo = usuario.correo;
        this.actualizarPerfilPresentVerb.ultimoIndiceAprendido = this.informacionSesionService.obtenerUltimoIndiceVerboAprendido() + this.informacionSesionService.obtenerNumeroVerbosPorAprenderDiario();
        this.presentVerbService.actualizarPerfil(this.actualizarPerfilPresentVerb).subscribe();
        this.hoyRealizoAprender();

      }
    );

  }

  private configuracionAprender() {
    this.formulario.resetForm();
    this.obtenerSiguienteIndice();
    this.reproducir();
  }

  private esIgualVerbEntradaVerboRutina(verboEntrada: any) {
    this.obtenerNumerosPalabras();
    if (this.informacionSesionService.obtenerEsPreguntaRespuesta()) {
      return null;
    } else {
      return verboEntrada.toUpperCase() == this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal].toUpperCase();
    }
  }

  ingresarInformacionAprender() {
    this.reproducir();
  }

  obtenerSiguienteIndice() {
    if (!this.estaRutinaCompletada()) {
      if (this.esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar()) {
        if (this.esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido()) {
          this.actualizarVerbosAprendidos();
          this.actualizarBarraProgreso();
          this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar ++;
          this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal = 0;
        } else {
          this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal++;
        }

      } else {
        this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal++;
      }

    } else {
      console.log('------- Rutina Completada 2 --------')
    }
  }
  private esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido() {
    return this.repeticionesAltaComoAprendidoTemporal == this.usuario.sistema.temaSeleccionado.configuracion.repeticionesAltaComoAprendido;
  }


  esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar() {
    return this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal == this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar;
  }

  estaRutinaCompletada() {
    const rutinaCompletada = Array.from({ length: this.usuario.sistema.temaSeleccionado.rutina.numeroVerbosAprender }, (v, k) => k);
    const rutinaActual = this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosAprendidos;

    if(this.isEmpty(rutinaActual)) {
      return false;
    }
    return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
  }

  actualizarVerbosAprendidos() {
    this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosAprendidos.push(this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar);
  }

  reproducir() {
    if (!this.hoyRealizoAprender()) {
      this.audioService.reproducir(this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal]);
      this.spanishVerbo = this.usuario.sistema.temaSeleccionado.rutina.spanish[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal]
      this.englishVerbo = this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal]
      this.obtenerNumerosPalabras();
    }
  }

  reproducirSiguientePalabra() {
    this.audioService.reproducir(this.obtenerSiguientePalabra());
  }

  obtenerSiguientePalabra() {
    var arrayEsperado = this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal].match(this.patt1);
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
    this.hoyYaRealizoAprender = this.estaRutinaCompletada() || this.informacionPresentVerbService.ultimaFechaAprendidaEsHoy();
    return this.hoyYaRealizoAprender;
  }

  actualizarBarraProgreso() {
    this.barraProgreso = (this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosAprendidos.length / this.usuario.sistema.temaSeleccionado.rutina.numeroVerbosAprender) * 100;
  }

  activarAyuda = false
  palabraActual = '';
  mostrarAyuda() {
    this.activarAyuda = true
    this.palabraActual = this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar];
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
    } else if (this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal].toUpperCase().includes(verboEntrada.toUpperCase())) {
      this.colorSegunValidacionClass = 'border border-success validacionExitosa';
    } else {
      this.colorSegunValidacionClass = 'border border-danger validacionError';
    }
  }

  obtenerNumerosPalabras() {
    var arrayEsperado = this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboRetrocesoTemporal].match(this.patt1);
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
