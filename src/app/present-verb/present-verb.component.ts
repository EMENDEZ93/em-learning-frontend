import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PresentVerbService } from './present-verb.service';
import { HttpClient } from '@angular/common/http';
import { AudioService } from '../comun/audio/audio.service';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { ActualizarUltimafecharutinaTemasService } from '../servicios/actualizar-ultimafecharutina-temas.service';
import { ActualizarUltimafecharutina } from '../servicios/actualizar-ultimafecharutina';
import { InformacionInicialSistema } from '../informacion-inicial-sistema';

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
    private actualizarUltimafecharutinaTemasService: ActualizarUltimafecharutinaTemasService, private informacionInicialSistema: InformacionInicialSistema) { }
  
  verboEntrada : string;
  barraProgreso = 0;

  ngOnInit() {
    console.log("PresentVerb hojaTemaExcel -> " + this.hojaTemaExcel)
    this.T = JSON.parse(this.informacionInicialSistema.obtenerTemas());
  }

  obtenerRutina(){
    this.presentVerbService.obtenerRutina(this.informacionSesionService.obtenerUltimoIndiceVerboAprendido(), this.hojaTemaExcel).subscribe(
      (rutina) =>{ 
        //console.log(this.informacionSesionService.obtenerUltimoIndiceVerboAprendido())
        console.log(rutina)
        this.ingresarInformacionRutina(rutina)  
      }, (error) => { }
    )
  }

  validarVerboEntredaConVerboRutina(verboEntrada){    
    if(this.estaRutinaCompletada()){
      console.log('------- Rutina Completada Inicio --------') 

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
  


      console.log('------- Fin --------') 


    } else if(this.esIgualVerbEntradaVerboRutina(verboEntrada)){
      this.formulario.resetForm();
      this.actualizarVerbosAprendidos();
      this.obtenerIndiceAleatoreo();
      this.reproducir();
      this.actualizarBarraProgreso();
    }
  }

  private esIgualVerbEntradaVerboRutina(verboEntrada: any) {
    return verboEntrada == this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboValidar];
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