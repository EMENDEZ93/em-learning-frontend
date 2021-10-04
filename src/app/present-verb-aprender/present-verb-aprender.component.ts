import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PresentVerbAprenderService } from './present-verb-aprender.service';
import { ActualizarPerfilPresentVerb } from './actualizar-perfil-present-verb';
import { AudioService } from '../comun/audio/audio.service';
import { InformacionPresentVerbService } from '../sesion/informacion-present-verb.service';
import { Store } from '@ngrx/store';
import { AppState } from '../dominio/estado/estado.reducer';
import { temaSeleccionado } from '../dominio/usuario/usuario.actions';
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
  }


  obtenerRutina() {

    this.store.select('usuario').subscribe(
      usuario => {

        //console.log("Before **")
        //console.log(this.isEmpty(usuario.sistema.temaSeleccionado.aprender))
        //console.log(this.isEmpty(usuario.sistema.temaSeleccionado.aprender) || this.usuario.sistema.temaSeleccionado.tema !== usuario.sistema.temaSeleccionado.tema)

        if (this.isEmpty(this.usuario) || this.isEmpty(this.usuario.sistema.temaSeleccionado.aprender) || this.usuario.sistema.temaSeleccionado.tema !== usuario.sistema.temaSeleccionado.tema) {

          this.usuario = usuario;
      
          console.log("************** 1 ******************")
      
          this.presentVerbService.obtenerRutinaByConfiguracions(usuario.sistema.temaSeleccionado).subscribe(
            (aprender) => {
              aprender.numeroVerbosAprender = aprender.english.length;
              aprender.indiceVerboRetrocesoTemporal = 0;
              aprender.indiceVerboValidar = 0;
              aprender.indicesVerbosAprendidos = [];
              usuario.sistema.temaSeleccionado.aprender = aprender;
              usuario.sistema.temaSeleccionado.tipo = "A";
              this.barraProgreso = 0;
              this.repeticionesAltaComoAprendidoTemporal = 0;
              this.hoyYaRealizoAprender = usuario.sistema.temaSeleccionado.realizadoHoy;

              this.store.dispatch(temaSeleccionado({ temaSeleccionado: usuario.sistema.temaSeleccionado }));
              this.ingresarInformacionAprender()
            }, (error) => { }
          )

        } else {
          console.log("************** 1.B ******************")
          this.hoyYaRealizoAprender = this.usuario.sistema.temaSeleccionado.realizadoHoy;          
          this.ingresarInformacionAprender()
        }


    }
    )

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

        
          this.actualizarPerfilPresentVerb = new ActualizarPerfilPresentVerb();
          this.actualizarPerfilPresentVerb.nombre = this.usuario.sistema.temaSeleccionado.tema;
          this.actualizarPerfilPresentVerb.correo = this.usuario.correo;
          this.actualizarPerfilPresentVerb.ultimoIndiceAprendido = this.usuario.sistema.temaSeleccionado.configuracion.ultimoIndiceAprendido + this.usuario.sistema.temaSeleccionado.aprender.english.length;

          this.presentVerbService.actualizarPerfil(this.actualizarPerfilPresentVerb).subscribe(
            exito => {
              console.log(exito)
            }
          );

          this.presentVerbService.obtenerPerfilPorTema(this.usuario).subscribe(
            configuracion => {
              console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
              console.log(configuracion)

              this.usuario.sistema.temaSeleccionado.configuracion = configuracion;
              this.usuario.sistema.temaSeleccionado.realizadoHoy = true;

            }
          )

          this.store.dispatch(temaSeleccionado({temaSeleccionado: this.usuario.sistema.temaSeleccionado}) )
          this.hoyRealizoAprender();
  }

  private configuracionAprender() {
    this.formulario.resetForm();
    this.obtenerSiguienteIndice();
    this.reproducir();
  }

  private esIgualVerbEntradaVerboRutina(verboEntrada: any) {
    this.obtenerNumerosPalabras();
    return verboEntrada.toUpperCase() == this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal].toUpperCase();
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
          this.usuario.sistema.temaSeleccionado.aprender.indiceVerboValidar++;
          this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal = 0;
        } else {
          this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal = 0;
          this.repeticionesAltaComoAprendidoTemporal++;
        }

      } else {
        this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal++;
      }

    } else {
      console.log('------- Rutina Completada 2 --------')
    }
  }
  private esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido() {
    return this.repeticionesAltaComoAprendidoTemporal == this.usuario.sistema.temaSeleccionado.configuracion.repeticionesAltaComoAprendido;
  }


  esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar() {
    return this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal == this.usuario.sistema.temaSeleccionado.aprender.indiceVerboValidar;
  }

  estaRutinaCompletada() {
    const rutinaCompletada = Array.from({ length: this.usuario.sistema.temaSeleccionado.aprender.numeroVerbosAprender }, (v, k) => k);
    const rutinaActual = this.usuario.sistema.temaSeleccionado.aprender.indicesVerbosAprendidos;

    if (this.isEmpty(rutinaActual)) {
      return false;
    }
    return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
  }

  actualizarVerbosAprendidos() {
    this.usuario.sistema.temaSeleccionado.aprender.indicesVerbosAprendidos.push(this.usuario.sistema.temaSeleccionado.aprender.indiceVerboValidar);
  }

  reproducir() {

    console.log("______________________Before___________________________")
    console.log(this.hoyRealizoAprender())
    console.log(!this.hoyRealizoAprender())

    if (!this.hoyRealizoAprender()) {

      console.log("_________________________________________________")

      this.audioService.reproducir(this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal]);
      this.spanishVerbo = this.usuario.sistema.temaSeleccionado.aprender.spanish[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.englishVerbo = this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.obtenerNumerosPalabras();
    }
  }

  reproducirSiguientePalabra() {
    this.audioService.reproducir(this.obtenerSiguientePalabra());
  }

  obtenerSiguientePalabra() {
    var arrayEsperado = this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal].match(this.patt1);
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

    console.log("this.estaRutinaCompletada() " + this.estaRutinaCompletada())
    console.log("this.ultimaFechaAprendidaEsHoy() " + this.ultimaFechaAprendidaEsHoy())

    this.hoyYaRealizoAprender = this.estaRutinaCompletada() || this.ultimaFechaAprendidaEsHoy();
    return this.hoyYaRealizoAprender;
  }

  actualizarBarraProgreso() {
    this.barraProgreso = (this.usuario.sistema.temaSeleccionado.aprender.indicesVerbosAprendidos.length / this.usuario.sistema.temaSeleccionado.aprender.numeroVerbosAprender) * 100;
  }

  activarAyuda = false
  palabraActual = '';
  mostrarAyuda() {
    this.activarAyuda = true
    this.palabraActual = this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboValidar];
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
    } else if (this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal].toUpperCase().includes(verboEntrada.toUpperCase())) {
      this.colorSegunValidacionClass = 'border border-success validacionExitosa';
    } else {
      this.colorSegunValidacionClass = 'border border-danger validacionError';
    }
  }

  obtenerNumerosPalabras() {

    this.hoyYaRealizoAprender = this.usuario.sistema.temaSeleccionado.realizadoHoy;
    
    if(!this.hoyYaRealizoAprender) {
      this.hoyYaRealizoAprender = this.usuario.sistema.temaSeleccionado.aprender.english.length <= 0;
    }
    
    if (!this.usuario.sistema.temaSeleccionado.realizadoHoy && this.usuario.sistema.temaSeleccionado.aprender.english.length > 0 ) {

      var arrayEsperado = this.usuario.sistema.temaSeleccionado.aprender.english[this.usuario.sistema.temaSeleccionado.aprender.indiceVerboRetrocesoTemporal].match(this.patt1);
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
    return new Date(this.transformarDate(this.usuario.sistema.temaSeleccionado.configuracion.ultimaFechaAprendio) ) >= new Date(  this.transformarDate(Date.now()) );
  }

  private transformarDate(date){
    return new DatePipe('en-LA').transform(date, 'shortDate'); 
  }


}