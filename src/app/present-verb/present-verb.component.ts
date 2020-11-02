import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PresentVerbService } from './present-verb.service';
import { HttpClient } from '@angular/common/http';
import { AudioService } from '../comun/audio/audio.service';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { ActualizarUltimafecharutinaTemasService } from '../servicios/actualizar-ultimafecharutina-temas.service';
import { ActualizarUltimafecharutina } from '../servicios/actualizar-ultimafecharutina';
import { InformacionInicialSistema } from '../informacion-inicial-sistema';
import { PresentVerbAprenderService } from '../present-verb-aprender/present-verb-aprender.service';
import {MatDialog} from '@angular/material/dialog';
import { Opcion } from './opcion';

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
    private presentVerbAprenderService: PresentVerbAprenderService, private informacionInicialSistema: InformacionInicialSistema,
    private dialog: MatDialog) { }
  
  verboEntrada : string;
  spanishVerbo: string;
  barraProgreso = 0;
  colorBarraProgreso = 'alert alert-danger';  
  colorSegunValidacionClass = 'border border-primary validacionVacia';
  cantidadVerbosReproducir = 0;
  patt1 = /\w+/g;

  ngOnInit() {
    this.T = JSON.parse(this.informacionInicialSistema.obtenerTemas());
    this.presentVerbAprenderService.obtenerPerfil(this.informacionSesionService.obtenerCorreo(), this.T[this.hojaTemaExcel]).subscribe(
      (perfil) =>{ 

        console.log("******** ngOnInit ********")
        console.log(perfil)

        this.informacionSesionService.guardarUltimoIndiceVerboAprendido(perfil.ultimoIndiceAprendido);
        this.informacionSesionService.guardarNumeroVerbosPorAprenderDiario(perfil.numeroVerbosPorAprenderDiario);
        this.informacionSesionService.guardarRepeticionesAltaComoAprendido(perfil.repeticionesAltaComoAprendido);
        this.informacionSesionService.guardarUltimaFechaAprendio(perfil.ultimaFechaAprendio);
        this.informacionSesionService.guardarEsPreguntaRespuesta(perfil.esPreguntaRespuesta);
      }, (error) => { }      
    )
  }

  obtenerRutina(){

    this.presentVerbAprenderService.obtenerPerfil(this.informacionSesionService.obtenerCorreo(), this.T[this.hojaTemaExcel]).subscribe(
      (perfil) =>{ 

        console.log("******** obtenerRutina ********")
        console.log(perfil)
        this.informacionSesionService.guardarUltimoIndiceVerboAprendido(perfil.ultimoIndiceAprendido);
        this.informacionSesionService.guardarNumeroVerbosPorAprenderDiario(perfil.numeroVerbosPorAprenderDiario);
        this.informacionSesionService.guardarRepeticionesAltaComoAprendido(perfil.repeticionesAltaComoAprendido);
        this.informacionSesionService.guardarUltimaFechaAprendio(perfil.ultimaFechaAprendio);
        this.informacionSesionService.guardarEsPreguntaRespuesta(perfil.esPreguntaRespuesta);

        this.presentVerbService.obtenerRutina(perfil.ultimoIndiceAprendido, this.hojaTemaExcel).subscribe(
          (rutina) =>{ 
            console.log(rutina)
            this.ingresarInformacionRutina(rutina)  
          }, (error) => { }
        )

      }, (error) => { }      
    )

      console.log("this.informacionSesionService.obtenerUltimoIndiceVerboAprendido() -> " + this.informacionSesionService.obtenerUltimoIndiceVerboAprendido())



    if(this.informacionSesionService.obtenerEsPreguntaRespuesta()){
      console.log("73 -> if(this.informacionSesionService.obtenerEsPreguntaRespuesta()){")
      console.log(this.informacionSesionService.obtenerUltimoIndiceVerboAprendido())
      this.presentVerbService.obtenerPreguntasRutina(this.informacionSesionService.obtenerUltimoIndiceVerboAprendido(), this.hojaTemaExcel).subscribe(
        (respuestas) =>{ 
          console.log("76 -> (respuestas) =>{ ")
          console.log(respuestas)
          this.informacionRutinaPresentVerb.respuestas = respuestas;
        }, (error) => { }
        )
    }
  }

  @Input() editable: boolean = true;
  @Input() showOptions: boolean = false;
  opciones : Opcion[] = [];

  
  validarVerboEntredaConVerboRutina(verboEntrada){    
    if(this.estaRutinaCompletada()){
      this.actualizarPerfil();
    } else if(this.esIgualVerbEntradaVerboRutina(verboEntrada)){
      this.editable = false;
      this.showOptions = true;

      const cuatro = false;
      let indices : number[] = [];
      
      while(!cuatro) {
      let indiceAleatoreo = Math.floor(Math.random() * this.informacionRutinaPresentVerb.numeroVerbosRutina) + 0;
        if(!indices.includes(indiceAleatoreo)) {
          indices.push(indiceAleatoreo);
        }

        if(indices.length == 4 ) {
          if(!indices.includes(this.informacionRutinaPresentVerb.indiceVerboValidar)) {
            indices = [];
          }
        }

        if(indices.length == 4 ) {
          break;
        }

      }
      this.opciones = []
      indices.forEach(element => {
        this.opciones.push(new Opcion(this.informacionRutinaPresentVerb.spanishVerbs[element], element))
      });

    }
  }


  validarTraductorSeleccionado(indiceOpcion) {
    console.log("[validarTraductorSeleccionado]")
    console.log(indiceOpcion)
    console.log(indiceOpcion == this.informacionRutinaPresentVerb.indiceVerboValidar)

    if(indiceOpcion == this.informacionRutinaPresentVerb.indiceVerboValidar ) {

      this.editable = true;
      this.showOptions = false;
      
      this.formulario.resetForm();
      this.actualizarVerbosAprendidos();
      this.obtenerIndiceAleatoreo();
      this.reproducir();
      this.actualizarBarraProgreso();
  
      if(this.estaRutinaCompletada()){
        this.actualizarPerfil();
      }

    }

  }


  private actualizarPerfil() {
    console.log("[actualizarPerfil]")
    this.actualizarUltimafecharutina = new ActualizarUltimafecharutina();
    this.actualizarUltimafecharutina.correo = this.informacionSesionService.obtenerCorreo();
    this.actualizarUltimafecharutina.nombre = this.T[this.hojaTemaExcel['tema']];
    console.log("[before]")
    this.presentVerbService.actualizarPerfil(this.actualizarUltimafecharutina).subscribe((exito) => {
    
    }, (error) => {

    });
  }

  private esIgualVerbEntradaVerboRutina(verboEntrada: any) {
    if(this.informacionSesionService.obtenerEsPreguntaRespuesta()){
      return verboEntrada.toUpperCase() == this.informacionRutinaPresentVerb.respuestas[this.informacionRutinaPresentVerb.indiceVerboValidar].toUpperCase();
    } else {
      return verboEntrada.toUpperCase() == this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboValidar].toUpperCase();
    }
  }

  ingresarInformacionRutina(rutina) {

    console.log("[ingresarInformacionRutina]")
    console.log(rutina)

    this.informacionRutinaPresentVerb = {
      verbos: rutina["english"],
      spanishVerbs: rutina["spanish"],
      numeroVerbosRutina : rutina["english"].length,
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
    if(!this.estaRutinaCompletada()) {
      this.audioService.reproducir(this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboValidar]);
    }
  }


  activarAyuda = false
  palabraActual = '';
  mostrarAyuda() {
    this.activarAyuda = true
    this.palabraActual = this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboValidar] + " / "+ this.informacionRutinaPresentVerb.spanishVerbs[this.informacionRutinaPresentVerb.indiceVerboValidar] ;
    setTimeout(() => {
      this.activarAyuda = false
    }, 3000)
  }


  colorSegunValidacion(verboEntrada) {

    console.log('>>>>>>>>> colorSegunValidacion <<<<<<<<<<<<<<<<<');
    console.log(this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboValidar].toUpperCase()  )
    
    if (verboEntrada.trim() == "") {
      this.colorSegunValidacionClass = 'border border-primary validacionVacia';
    } else if (this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboValidar].toUpperCase().includes(verboEntrada.toUpperCase())) {
      this.colorSegunValidacionClass = 'border border-success validacionExitosa';
    } else {
      this.colorSegunValidacionClass = 'border border-danger validacionError';
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

  mostrarSiguientePalabra() {
    this.activarAyuda = true
    this.palabraActual = this.obtenerSiguientePalabra();
    setTimeout(() => {
      this.activarAyuda = false
    }, 3000)
  }

}
