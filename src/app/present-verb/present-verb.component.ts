import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PresentVerbService } from './present-verb.service';
import { HttpClient } from '@angular/common/http';
import { AudioService } from '../comun/audio/audio.service';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { ActualizarUltimafecharutinaTemasService } from '../servicios/actualizar-ultimafecharutina-temas.service';
import { ActualizarUltimafecharutina } from '../servicios/actualizar-ultimafecharutina';
import { InformacionInicialSistema } from '../informacion-inicial-sistema';
import { PresentVerbAprenderService } from '../present-verb-aprender/present-verb-aprender.service';

@Component({
  selector: 'app-present-verb',
  templateUrl: './present-verb.component.html',
  styleUrls: ['./present-verb.component.css']
})
export class PresentVerbComponent implements OnInit {

  informacionRutinaPresentVerb: any;
  actualizarUltimafecharutina: ActualizarUltimafecharutina;
  T : any = [];

  @Input() hojaTemaExcel: any;
  @ViewChild('formulario', {static: false}) formulario;
  
  constructor(public http: HttpClient, private presentVerbService: PresentVerbService, private audioService : AudioService, private informacionSesionService: InformacionSesionService, 
    private presentVerbAprenderService: PresentVerbAprenderService, private informacionInicialSistema: InformacionInicialSistema) { }
  
  verboEntrada : string;
  barraProgreso = 0;
  colorBarraProgreso = 'alert alert-danger';  

  ngOnInit() {
    this.T = JSON.parse(this.informacionInicialSistema.obtenerTemas());
    this.presentVerbAprenderService.obtenerPerfil(this.informacionSesionService.obtenerCorreo(), this.T[this.hojaTemaExcel]).subscribe(
      (perfil) =>{ 
        this.informacionSesionService.guardarUltimoIndiceVerboAprendido(perfil.ultimoIndiceAprendido);
        this.informacionSesionService.guardarNumeroVerbosPorAprenderDiario(perfil.numeroVerbosPorAprenderDiario);
        this.informacionSesionService.guardarRepeticionesAltaComoAprendido(perfil.repeticionesAltaComoAprendido);
        this.informacionSesionService.guardarUltimaFechaAprendio(perfil.ultimaFechaAprendio);
        this.informacionSesionService.guardarEsPreguntaRespuesta(perfil.esPreguntaRespuesta);
      }, (error) => { }      
    )
  }

  obtenerRutina(){
    this.presentVerbService.obtenerRutina(this.informacionSesionService.obtenerUltimoIndiceVerboAprendido(), this.hojaTemaExcel).subscribe(
      (rutina) =>{ 
        this.ingresarInformacionRutina(rutina)  
      }, (error) => { }
    )

    if(this.informacionSesionService.obtenerEsPreguntaRespuesta()){
      this.presentVerbService.obtenerPreguntasRutina(this.informacionSesionService.obtenerUltimoIndiceVerboAprendido(), this.hojaTemaExcel).subscribe(
        (respuestas) =>{ 
          this.informacionRutinaPresentVerb.respuestas = respuestas;
        }, (error) => { }
        )
    }
  }

  validarVerboEntredaConVerboRutina(verboEntrada){    
    if(this.estaRutinaCompletada()){
      this.actualizarUltimafecharutina = new ActualizarUltimafecharutina();
      this.actualizarUltimafecharutina.correo = this.informacionSesionService.obtenerCorreo(); 
      this.actualizarUltimafecharutina.nombre =  this.T[this.hojaTemaExcel];
      this.presentVerbService.actualizarPerfil(this.actualizarUltimafecharutina).subscribe(
        (exito) => {
          console.log("exito -> " +  exito)
        }, (error) => {
          console.log("error -> " +  error)
        }
      );

    } else if(this.esIgualVerbEntradaVerboRutina(verboEntrada)){
      this.formulario.resetForm();
      this.actualizarVerbosAprendidos();
      this.obtenerIndiceAleatoreo();
      this.reproducir();
      this.actualizarBarraProgreso();
    }
  }

  private esIgualVerbEntradaVerboRutina(verboEntrada: any) {
    if(this.informacionSesionService.obtenerEsPreguntaRespuesta()){
      return verboEntrada == this.informacionRutinaPresentVerb.respuestas[this.informacionRutinaPresentVerb.indiceVerboValidar];
    } else {
      return verboEntrada == this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboValidar];
    }
  }

  ingresarInformacionRutina(rutina) {
    this.informacionRutinaPresentVerb = {
      verbos: rutina,
      numeroVerbosRutina : rutina.length,
      indiceVerboValidar : 0,
      indicesVerbosRepasados : []
    }
    this.obtenerIndiceAleatoreo();
    this.reproducir();
  }  

  obtenerIndiceAleatoreo(){
    const existeMasVerbosPorRepasar = true;
    while(existeMasVerbosPorRepasar){
      if(this.estaRutinaCompletada()){
        break;
      }

      const indiceAleatoreo = Math.floor(Math.random() * this.informacionRutinaPresentVerb.numeroVerbosRutina) + 0 
      if(!this.informacionRutinaPresentVerb.indicesVerbosRepasados.includes(indiceAleatoreo)){
        this.informacionRutinaPresentVerb.indiceVerboValidar = indiceAleatoreo;
        break;
      } 
    }
  }

  estaRutinaCompletada(){
    const rutinaCompletada =  Array.from({length: this.informacionRutinaPresentVerb.numeroVerbosRutina}, (v, k) => k); 
    const rutinaActual =  this.informacionRutinaPresentVerb.indicesVerbosRepasados; 
    return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
  }

  actualizarVerbosAprendidos(){
    this.informacionRutinaPresentVerb.indicesVerbosRepasados.push(this.informacionRutinaPresentVerb.indiceVerboValidar);
  }

  actualizarBarraProgreso(){
    this.barraProgreso = (this.informacionRutinaPresentVerb.indicesVerbosRepasados.length/this.informacionRutinaPresentVerb.numeroVerbosRutina) * 100;
  }

  reproducir(){
    this.audioService.reproducir(this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboValidar]);
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

}