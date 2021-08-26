import { Component, OnInit, ViewChild, Input, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AudioService } from '../comun/audio/audio.service';
import { PresentVerbAprenderService } from '../present-verb-aprender/present-verb-aprender.service';
import {MatDialog} from '@angular/material/dialog';
import { Opcion } from './opcion';
import { Store } from '@ngrx/store';
import { AppState } from '../dominio/estado/estado.reducer';
import { Tema } from '../dominio/tema/tema.model';
import { Usuario } from '../dominio/usuario/usuario.model';
import { temaSeleccionado } from '../dominio/usuario/usuario.actions';
import { PresentVerbService } from './present-verb.service';

@Component({
  selector: 'app-present-verb',
  templateUrl: './present-verb.component.html',
  styleUrls: ['./present-verb.component.css']
})
export class PresentVerbComponent implements OnInit {

  usuario: Usuario;

  @Input() hojaTemaExcel: any;
  @ViewChild('formulario', {static: false}) formulario;
  
  constructor(
    public http: HttpClient, 
    private presentVerbService: PresentVerbService,
    private audioService : AudioService, 
    private store: Store<AppState>) { }
  
  verboEntrada : string;
  spanishVerbo: string;
  barraProgreso = 0;
  colorBarraProgreso = 'alert alert-danger';  
  colorSegunValidacionClass = 'border border-primary validacionVacia';
  cantidadVerbosReproducir = 0;
  patt1 = /\w+/g;

  ngOnInit() {
    //this.obtenerRutina();
  }

  obtenerRutina(){

      this.store.select('usuario').subscribe(
        usuario => {
          this.usuario = usuario; 

          if (this.isEmpty(usuario.sistema.temaSeleccionado.rutina)) {
            
          this.presentVerbService.obtenerRutinaRepasoByConfiguracion(usuario.sistema.temaSeleccionado).subscribe(
            (rutina) => {
                rutina.numeroVerbosAprender = rutina.english.length;
                rutina.indiceVerboRetrocesoTemporal = 0;
                rutina.indiceVerboValidar = 0;
                rutina.indicesVerbosAprendidos = [];
                rutina.indicesVerbosRepasados = [];
                rutina.numeroVerbosRutina = rutina.english.length;
                usuario.sistema.temaSeleccionado.rutina = rutina;
                this.barraProgreso = 0;
                this.store.dispatch(temaSeleccionado({ temaSeleccionado: usuario.sistema.temaSeleccionado }));
                this.ingresarInformacionRutina();
              }, (error) => { }
            )
  
          }
  
        }
      )

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
      let indiceAleatoreo = Math.floor(Math.random() * this.usuario.sistema.temaSeleccionado.rutina.numeroVerbosRutina) + 0;
        if(!indices.includes(indiceAleatoreo)) {
          indices.push(indiceAleatoreo);
        }

        if(indices.length == 4 ) {
          if(!indices.includes(this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar)) {
            indices = [];
          }
        }

        if(indices.length == 4 ) {
          break;
        }

      }
      this.opciones = []
      indices.forEach(element => {
        this.opciones.push(new Opcion(this.usuario.sistema.temaSeleccionado.rutina.spanish[element], element))
      });

    }
  }

  @ViewChild("verboEntradaInput", {static: false}) verboEntradaInput: ElementRef;

  validarTraductorSeleccionado(indiceOpcion) {
    if(indiceOpcion == this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar ) {

      this.actualizarVerbosAprendidos();
      this.obtenerIndiceAleatoreo();
      this.reproducir();
      this.actualizarBarraProgreso();
  
      if(this.estaRutinaCompletada()){
        this.actualizarPerfil();
      }

      this.editable = true;
      this.showOptions = false;

      setTimeout(() => {
        this.formulario.resetForm();
        this.verboEntradaInput.nativeElement.focus();
        }, 1)

    }

  }

  key : string;
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(this.showOptions) {
      this.key = event.key;
      document.getElementById(event.key).click();
    }
  }



  private actualizarPerfil() {
    /*console.log("[actualizarPerfil]")
    this.actualizarUltimafecharutina = new ActualizarUltimafecharutina();
    //this.actualizarUltimafecharutina.correo = this.informacionSesionService.obtenerCorreo();
    this.actualizarUltimafecharutina.nombre = this.T[this.hojaTemaExcel['tema']].tema;
    console.log("[before]")
    this.presentVerbService.actualizarPerfil(this.actualizarUltimafecharutina).subscribe((exito) => {
    
    }, (error) => {

    });*/
  }

  private esIgualVerbEntradaVerboRutina(verboEntrada: any) {
    return verboEntrada.toUpperCase() == this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar].toUpperCase();
  }

  ingresarInformacionRutina() {
    this.obtenerIndiceAleatoreo();
    this.reproducir();
  }  

  obtenerIndiceAleatoreo(){
    const existeMasVerbosPorRepasar = true;
    while(existeMasVerbosPorRepasar){
      if(this.estaRutinaCompletada()){
        break;
      }

      const indiceAleatoreo = Math.floor(Math.random() * this.usuario.sistema.temaSeleccionado.rutina.numeroVerbosRutina) + 0 
      if(!this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosRepasados.includes(indiceAleatoreo)){
        this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar = indiceAleatoreo;
        break;
      } 
    }
  }

  estaRutinaCompletada(){
    const rutinaCompletada =  Array.from({length: this.usuario.sistema.temaSeleccionado.rutina.numeroVerbosRutina}, (v, k) => k); 
    const rutinaActual =  this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosRepasados; 

    if(this.isEmpty(rutinaActual)) {
      return false;
    }

    return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
  }

  isEmpty(obj) {
    if(obj === undefined) return true;
    return Object.keys(obj).length === 0;
  }

  actualizarVerbosAprendidos(){
    this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosRepasados.push(this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar);
  }

  actualizarBarraProgreso(){
    this.barraProgreso = (this.usuario.sistema.temaSeleccionado.rutina.indicesVerbosRepasados.length/this.usuario.sistema.temaSeleccionado.rutina.numeroVerbosRutina) * 100;
  }

  reproducir(){
    if(!this.estaRutinaCompletada()) {
      this.audioService.reproducir(this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar]);
    }
  }


  activarAyuda = false
  palabraActual = '';
  mostrarAyuda() {
    this.activarAyuda = true
    this.palabraActual = this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar] + " / "+ this.usuario.sistema.temaSeleccionado.rutina.spanish[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar];
    setTimeout(() => {
      this.activarAyuda = false
    }, 3000)
  }


  colorSegunValidacion(verboEntrada) {
    
    if (verboEntrada.trim() == "") {
      this.colorSegunValidacionClass = 'border border-primary validacionVacia';
    } else if (this.usuario.sistema.temaSeleccionado.rutina.english[this.usuario.sistema.temaSeleccionado.rutina.indiceVerboValidar].toUpperCase().includes(verboEntrada.toUpperCase())) {
      this.colorSegunValidacionClass = 'border border-success validacionExitosa';
    } else {
      this.colorSegunValidacionClass = 'border border-danger validacionError';
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

  mostrarSiguientePalabra() {
    this.activarAyuda = true
    this.palabraActual = this.obtenerSiguientePalabra();
    setTimeout(() => {
      this.activarAyuda = false
    }, 3000)
  }


}
