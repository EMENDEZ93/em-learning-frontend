import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PresentVerbAprenderService } from './present-verb-aprender.service';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { ActualizarPerfilPresentVerb } from './actualizar-perfil-present-verb';
import { AudioService } from '../comun/audio/audio.service';
import { InformacionInicialSistema } from '../informacion-inicial-sistema';
import { InformacionPresentVerbService } from '../sesion/informacion-present-verb.service';

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

  informacionRutinaPresentVerb: any;
  actualizarPerfilPresentVerb: ActualizarPerfilPresentVerb;

  @Input() hojaTemaExcel: any;
  @Output() ultimFechaAprendido = new EventEmitter<boolean>();

  @ViewChild('formulario', { static: false }) formulario;
  T: any = [];

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
    private audioService: AudioService, private informacionInicialSistema: InformacionInicialSistema, private informacionPresentVerbService: InformacionPresentVerbService) { }

  ngOnInit() {
    this.ultimFechaAprendido.emit(this.informacionPresentVerbService.ultimaFechaAprendidaEsHoy());
    this.T = JSON.parse(this.informacionInicialSistema.obtenerTemas());
    this.presentVerbService.obtenerPerfil(this.informacionSesionService.obtenerCorreo(), this.T[this.hojaTemaExcel]).subscribe(
      (perfil) => {

        console.log("Edwin mendez -> " + perfil)

        this.informacionSesionService.guardarUltimoIndiceVerboAprendido(perfil.ultimoIndiceAprendido);
        this.informacionSesionService.guardarNumeroVerbosPorAprenderDiario(perfil.numeroVerbosPorAprenderDiario);
        this.informacionSesionService.guardarRepeticionesAltaComoAprendido(perfil.repeticionesAltaComoAprendido);
        this.informacionSesionService.guardarUltimaFechaAprendio(perfil.ultimaFechaAprendio);
        this.informacionSesionService.guardarEsPreguntaRespuesta(perfil.esPreguntaRespuesta);
      }, (error) => { }
    )
  }

  obtenerRutina() {
    this.presentVerbService.obtenerRutina(this.informacionSesionService.obtenerUltimoIndiceVerboAprendido(), this.informacionSesionService.obtenerNumeroVerbosPorAprenderDiario(), this.hojaTemaExcel).subscribe(
      (rutina) => {

        console.log(rutina)
        this.ingresarInformacionAprender(rutina)
      }, (error) => { }
    )

    if (this.informacionSesionService.obtenerEsPreguntaRespuesta()) {
      this.presentVerbService.obtenerPreguntas(this.informacionSesionService.obtenerUltimoIndiceVerboAprendido(), this.informacionSesionService.obtenerNumeroVerbosPorAprenderDiario(), this.hojaTemaExcel).subscribe(
        (preguntas) => {
          this.informacionRutinaPresentVerb.preguntas = preguntas;
        }, (error) => { }
      )
    }
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
    console.log("[private actualizacionPerfil]")

    console.log(this.T[this.hojaTemaExcel]['tema'])
    console.log(this.T[this.hojaTemaExcel])
    console.log(this.T)
    console.log(this.hojaTemaExcel)

    this.actualizarPerfilPresentVerb = new ActualizarPerfilPresentVerb();
    this.actualizarPerfilPresentVerb.nombre = this.T[this.hojaTemaExcel]['tema'];
    this.actualizarPerfilPresentVerb.correo = this.informacionSesionService.obtenerCorreo();
    this.actualizarPerfilPresentVerb.ultimoIndiceAprendido = this.informacionSesionService.obtenerUltimoIndiceVerboAprendido() + this.informacionSesionService.obtenerNumeroVerbosPorAprenderDiario();
    console.log("--> " + this.actualizarPerfilPresentVerb)
    console.log(this.actualizarPerfilPresentVerb)
    console.log("--> " + this.actualizarPerfilPresentVerb)
    
    this.presentVerbService.actualizarPerfil(this.actualizarPerfilPresentVerb).subscribe();
    this.hoyRealizoAprender();
  }

  private configuracionAprender() {
    this.formulario.resetForm();
    this.obtenerSiguienteIndice();
    this.reproducir();
  }

  private esIgualVerbEntradaVerboRutina(verboEntrada: any) {

    this.obtenerNumerosPalabras();

    if (this.informacionSesionService.obtenerEsPreguntaRespuesta()) {
      return verboEntrada.toUpperCase() == this.informacionRutinaPresentVerb.preguntas[this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal].toUpperCase();
    } else {
      return verboEntrada.toUpperCase() == this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal].toUpperCase();
    }

  }

  ingresarInformacionAprender(rutina) {

    console.log("[ingresarInformacionAprender]")
    console.log(rutina["english"])

    this.informacionRutinaPresentVerb = {
      verbos: rutina["english"],
      spanishVerbs: rutina["spanish"],
      numeroVerbosAprender: rutina["english"].length,
      indiceVerboValidar: 0,
      indiceVerboRetrocesoTemporal: 0,
      indicesVerbosAprendidos: [],
      repeticionesAltaComoAprendido: this.informacionSesionService.obtenerRepeticionesAltaComoAprendido()
    }
    this.reproducir();
  }

  obtenerSiguienteIndice() {
    if (!this.estaRutinaCompletada()) {

      if (this.esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar()) {
      
        if (this.esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido()) {
          this.actualizarVerbosAprendidos();
          this.actualizarBarraProgreso();
          this.informacionRutinaPresentVerb.indiceVerboValidar++;
          this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal = 0;
        } else {
          this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal++;
        }
      
      } else {
        this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal++;
      }

    } else {
      console.log('------- Rutina Completada 2 --------')
    }
  }
  private esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido() {
    console.log("[esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido]")
    console.log("this.informacionRutinaPresentVerb.repeticionesAltaComoAprendido -> " + this.informacionRutinaPresentVerb.repeticionesAltaComoAprendido)
    console.log("this.repeticionesAltaComoAprendidoTemporal -> " + this.repeticionesAltaComoAprendidoTemporal)
    
    return this.repeticionesAltaComoAprendidoTemporal == this.informacionRutinaPresentVerb.repeticionesAltaComoAprendido;

  }


  esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar() {
    return this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal == this.informacionRutinaPresentVerb.indiceVerboValidar;
  }

  estaRutinaCompletada() {
    const rutinaCompletada = Array.from({ length: this.informacionRutinaPresentVerb.numeroVerbosAprender }, (v, k) => k);
    const rutinaActual = this.informacionRutinaPresentVerb.indicesVerbosAprendidos;

    console.log("[estaRutinaCompletada]")
    console.log(JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort()))

    return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
  }

  actualizarVerbosAprendidos() {
    this.informacionRutinaPresentVerb.indicesVerbosAprendidos.push(this.informacionRutinaPresentVerb.indiceVerboValidar);
  }

  reproducir() {
    if (!this.hoyRealizoAprender()) {
      this.audioService.reproducir(this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal]);
      this.spanishVerbo = this.informacionRutinaPresentVerb.spanishVerbs[this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal]
      this.englishVerbo = this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal]
      this.obtenerNumerosPalabras();
    }
  }

  reproducirSiguientePalabra() {
    this.audioService.reproducir(this.obtenerSiguientePalabra());
  }

  obtenerSiguientePalabra() {
    var arrayEsperado = this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal].match(this.patt1);
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

    //console.log("[hoyRealizoAprender]")
    //console.log(" this.estaRutinaCompletada()" + this.estaRutinaCompletada())
    //console.log(" this.informacionPresentVerbService.ultimaFechaAprendidaEsHoy()" + this.informacionPresentVerbService.ultimaFechaAprendidaEsHoy())
    //console.log(this.hoyYaRealizoAprender)

    return this.hoyYaRealizoAprender;
  }

  actualizarBarraProgreso() {
    this.barraProgreso = (this.informacionRutinaPresentVerb.indicesVerbosAprendidos.length / this.informacionRutinaPresentVerb.numeroVerbosAprender) * 100;
  }

  activarAyuda = false
  palabraActual = '';
  mostrarAyuda() {
    this.activarAyuda = true
    this.palabraActual = this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboValidar];
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
    } else if (this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal].toUpperCase().includes(verboEntrada.toUpperCase())) {
      this.colorSegunValidacionClass = 'border border-success validacionExitosa';
    } else {
      this.colorSegunValidacionClass = 'border border-danger validacionError';
    }
  }

  obtenerNumerosPalabras() {  
    var arrayEsperado = this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal].match(this.patt1);
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
