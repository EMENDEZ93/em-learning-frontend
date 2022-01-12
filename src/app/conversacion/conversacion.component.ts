import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AudioService } from '../comun/audio/audio.service';
import { AppState } from '../dominio/estado/estado.reducer';
import { Usuario } from '../dominio/usuario/usuario.model';
import { ActualizarPerfilPresentVerb } from '../present-verb-aprender/actualizar-perfil-present-verb';
import { ConversacionService } from './conversacion.service';
import { Conversacion } from '../dominio/conversacion/conversacion.models';

@Component({
  selector: 'app-conversacion',
  templateUrl: './conversacion.component.html',
  styleUrls: ['./conversacion.component.css']
})
export class ConversacionComponent implements OnInit {

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
    private audioService: AudioService,
    private store: Store<AppState>,
    private conversacionService: ConversacionService
    ) { }

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
        if (this.isEmpty(this.usuario) || this.isEmpty(this.usuario.sistema.hojaSeleccionado.conversacion) || this.hojaActual !== usuario.sistema.hojaSeleccionado.nombre) {
          this.hojaActual = usuario.sistema.hojaSeleccionado.nombre;
          this.usuario = usuario;
          this.conversacionService.executer(usuario.sistema.hojaSeleccionado.id).subscribe(
            (oraciones) => {
              this.barraProgreso = 0;
              this.repeticionesAltaComoAprendidoTemporal = 0;
              this.hoyYaRealizoAprender = usuario.sistema.hojaSeleccionado.realizadoHoy;
              usuario.sistema.hojaSeleccionado.conversacion = new Conversacion();
              usuario.sistema.hojaSeleccionado.conversacion.numeroVerbosAprender = oraciones.length;
              usuario.sistema.hojaSeleccionado.conversacion.oraciones = oraciones;
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
    /*this.presentVerbService.getUpdateHojaById(this.usuario.sistema.hojaSeleccionado.id).subscribe(
      (hoja) => {

          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
          console.log(hoja)

          this.usuario.sistema.hojaSeleccionado = hoja;
          this.store.dispatch(actualizarHoja({hojaSeleccionado: this.usuario.sistema.hojaSeleccionado}) )
          this.hoyRealizoAprender();
            },
      (error) => {
        console.log("************************************************")
        console.log(error)
      }
    );*/
  }

  private configuracionAprender() {
    this.formulario.resetForm();
    this.obtenerSiguienteIndice();
    this.reproducir();
  }

  private esIgualVerbEntradaVerboRutina(verboEntrada: any) {
    this.obtenerNumerosPalabras();
    return verboEntrada.toUpperCase() == this.usuario.sistema.hojaSeleccionado.conversacion.oraciones[this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal].english.toUpperCase();
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
          this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboValidar++;
          this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal++;
          this.repeticionesAltaComoAprendidoTemporal = 0;
        } else {
          this.repeticionesAltaComoAprendidoTemporal++;
          if(!this.activarAyuda) {
            this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal++;
          }
        }

      } else {
        this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal++;
      }

    } else {
      console.log('------- Rutina Completada 2 --------')
    }
  }


  repeticionesPorAyuda: number;
  private esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido() {
    console.log("esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido")
    console.log(this.repeticionesAltaComoAprendidoTemporal)
    console.log(this.usuario.sistema.hojaSeleccionado.conversacion.repeticionesAltaComoAprendido)

    if(this.activarAyuda) {
      if(this.repeticionesAltaComoAprendidoTemporal == 5) {
        this.activarAyuda = false;
        return true;
      } else {
        return false;
      }
    } else {
      return this.repeticionesAltaComoAprendidoTemporal == this.usuario.sistema.hojaSeleccionado.conversacion.repeticionesAltaComoAprendido;
    }
  }


  esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar() {
    return this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal == this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboValidar;
  }

  estaRutinaCompletada() {
    if(!this.isEmpty(this.usuario.sistema.hojaSeleccionado.conversacion.oraciones)) {
      const rutinaCompletada = Array.from({ length: this.usuario.sistema.hojaSeleccionado.conversacion.numeroVerbosAprender }, (v, k) => k);
      const rutinaActual = this.usuario.sistema.hojaSeleccionado.conversacion.indicesVerbosAprendidos;
      if (this.isEmpty(rutinaActual)) {
        return false;
      }
      return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
    } else {
      return true;
    }
  }

  actualizarVerbosAprendidos() {
    this.usuario.sistema.hojaSeleccionado.conversacion.indicesVerbosAprendidos.push(this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboValidar);
    //console.log("____________ actualizarVerbosAprendidos ______________")
    //console.log(this.usuario.sistema.hojaSeleccionado.conversacion.indicesVerbosAprendidos)
  }

  reproducir() {
    if (!this.hoyRealizoAprender()) {
    //if (true) {
      this.audioService.reproducir(this.usuario.sistema.hojaSeleccionado.conversacion.oraciones[this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal].english);
      this.spanishVerbo = this.usuario.sistema.hojaSeleccionado.conversacion.oraciones[this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal].spanish;
      this.englishVerbo = this.usuario.sistema.hojaSeleccionado.conversacion.oraciones[this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal].english;
      this.obtenerNumerosPalabras();
    }
  }

  reproducirSiguientePalabra() {
    this.audioService.reproducir(this.obtenerSiguientePalabra());
  }

  obtenerSiguientePalabra() {
    var arrayEsperado = this.usuario.sistema.hojaSeleccionado.conversacion[this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal].english.match(this.patt1);
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
    this.hoyYaRealizoAprender = this.estaRutinaCompletada(); 
    //|| this.ultimaFechaAprendidaEsHoy();
    return this.hoyYaRealizoAprender;
  }

  actualizarBarraProgreso() {
    this.barraProgreso = (this.usuario.sistema.hojaSeleccionado.conversacion.indicesVerbosAprendidos.length / this.usuario.sistema.hojaSeleccionado.conversacion.numeroVerbosAprender) * 100;
  }

  activarAyuda = false
  palabraActual = '';
  mostrarAyudaConversacion() {
    this.activarAyuda = true
    this.palabraActual = this.usuario.sistema.hojaSeleccionado.conversacion.oraciones[this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboValidar].english;
    /*setTimeout(() => {
      this.activarAyuda = false
    }, 3000)*/
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
    } else if (this.usuario.sistema.hojaSeleccionado.conversacion.oraciones[this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal].english.toUpperCase().includes(verboEntrada.toUpperCase())) {

      this.colorSegunValidacionClass = 'border border-success validacionExitosa';
    } else {
      this.colorSegunValidacionClass = 'border border-danger validacionError';
    }
  }

  obtenerNumerosPalabras() {
    //this.hoyYaRealizoAprender = this.usuario.sistema.hojaSeleccionado.realizadoHoy;
    this.hoyYaRealizoAprender = false;
    
    if(!this.hoyYaRealizoAprender) {
      this.hoyYaRealizoAprender = this.usuario.sistema.hojaSeleccionado.conversacion.oraciones.length <= 0;
    }
    
    //if (!this.hoyYaRealizoAprender && this.usuario.sistema.hojaSeleccionado.aprender.english.length > 0 ) {
    if (!this.hoyYaRealizoAprender && this.usuario.sistema.hojaSeleccionado.conversacion.oraciones.length > 0 ) {
      var arrayEsperado = this.usuario.sistema.hojaSeleccionado.conversacion.oraciones[this.usuario.sistema.hojaSeleccionado.conversacion.indiceVerboRetrocesoTemporal].english.match(this.patt1);
      
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
