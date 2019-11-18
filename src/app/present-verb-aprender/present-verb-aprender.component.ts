import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PresentVerbAprenderService } from './present-verb-aprender.service';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { ActualizarPerfilPresentVerb } from './actualizar-perfil-present-verb';
import { DatePipe } from '@angular/common';
import { AudioService } from '../comun/audio/audio.service';
import { InformacionInicialSistema } from '../informacion-inicial-sistema';

@Component({
  selector: 'app-present-verb-aprender',
  templateUrl: './present-verb-aprender.component.html',
  styleUrls: ['./present-verb-aprender.component.css']
})
export class PresentVerbAprenderComponent implements OnInit {

  informacionRutinaPresentVerb: any;
  actualizarPerfilPresentVerb: ActualizarPerfilPresentVerb;
  
  @Input() hojaTemaExcel: any;
  @ViewChild('formulario', {static: false}) formulario;
  T : any = [];
  
  constructor(public http: HttpClient, private presentVerbService: PresentVerbAprenderService, private informacionSesionService: InformacionSesionService,
    private audioService : AudioService, private informacionInicialSistema: InformacionInicialSistema) { }
  
  verboEntrada : string;
  repeticionesAltaComoAprendidoTemporal= 0;
  
  ngOnInit() {
    console.log("PresentVerbAprender hojaTemaExcel -> " + this.hojaTemaExcel)

    this.T = JSON.parse(this.informacionInicialSistema.obtenerTemas());
    console.log(this.T[0])
  }

  obtenerRutina(){

    console.log('************ obtenerRutina ____')
    

    this.presentVerbService.obtenerPerfil(this.informacionSesionService.obtenerCorreo(), this.T[this.hojaTemaExcel]).subscribe(
      (perfil) =>{ 


        this.informacionSesionService.guardarUltimoIndiceVerboAprendido(perfil.ultimoIndiceAprendido);
        this.informacionSesionService.guardarNumeroVerbosPorAprenderDiario(perfil.numeroVerbosPorAprenderDiario);
        this.informacionSesionService.guardarRepeticionesAltaComoAprendido(perfil.repeticionesAltaComoAprendido);
        this.informacionSesionService.guardarUltimaFechaAprendio(perfil.ultimaFechaAprendio);
      }, (error) => { }      
    )

    console.log('************ ____')
      console.log(this.informacionSesionService)

    this.presentVerbService.obtenerRutina(this.informacionSesionService.obtenerUltimoIndiceVerboAprendido(), this.informacionSesionService.obtenerNumeroVerbosPorAprenderDiario(), this.hojaTemaExcel).subscribe(
      (rutina) =>{ 
        this.ingresarInformacionAprender(rutina)  
        console.log("-> " + rutina);
      }, (error) => { }
    )

  }

  validarVerboEntredaConVerboPorAprender(verboEntrada){    
    if(this.estaRutinaCompletada()){
      console.log('------- Rutina Completada 1 --------') 
      this.actualizarPerfilPresentVerb = new ActualizarPerfilPresentVerb();
      this.actualizarPerfilPresentVerb.nombre = this.T[this.hojaTemaExcel]; 
      this.actualizarPerfilPresentVerb.correo = this.informacionSesionService.obtenerCorreo();
      this.actualizarPerfilPresentVerb.ultimoIndiceAprendido = this.informacionSesionService.obtenerUltimoIndiceVerboAprendido() + this.informacionSesionService.obtenerNumeroVerbosPorAprenderDiario();
      this.presentVerbService.actualizarPerfil(this.actualizarPerfilPresentVerb).subscribe(
        
      );
    } else if(this.esIgualVerbEntradaVerboRutina(verboEntrada)){
      this.configuracionAprender();
    }
  }

  private configuracionAprender() {
    this.formulario.resetForm();
    this.obtenerSiguienteIndice();
    this.reproducir();
  }

  private esIgualVerbEntradaVerboRutina(verboEntrada: any) {
    return verboEntrada == this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal];
  }

  ingresarInformacionAprender(rutina) {
    this.informacionRutinaPresentVerb = {
      verbos: rutina,
      numeroVerbosAprender : rutina.length,
      indiceVerboValidar : 0,
      indiceVerboRetrocesoTemporal: 0,
      indicesVerbosAprendidos : [],
      repeticionesAltaComoAprendido: this.informacionSesionService.obtenerRepeticionesAltaComoAprendido()
    }
    this.reproducir();
  }  

  obtenerSiguienteIndice(){
      if(!this.estaRutinaCompletada() ){
        if(this.esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar()){
          if(this.esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido()){
            this.actualizarVerbosAprendidos();
            this.informacionRutinaPresentVerb.indiceVerboValidar++;
            this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal=0;
            this.repeticionesAltaComoAprendidoTemporal=0;
          } else {
            this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal=0;
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
    return this.repeticionesAltaComoAprendidoTemporal == this.informacionRutinaPresentVerb.repeticionesAltaComoAprendido;
  }

  esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar() {
    return this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal == this.informacionRutinaPresentVerb.indiceVerboValidar;
  }

  estaRutinaCompletada(){
    const rutinaCompletada =  Array.from({length: this.informacionRutinaPresentVerb.numeroVerbosAprender}, (v, k) => k); 
    const rutinaActual =  this.informacionRutinaPresentVerb.indicesVerbosAprendidos; 
    return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
  }

  actualizarVerbosAprendidos(){
    this.informacionRutinaPresentVerb.indicesVerbosAprendidos.push(this.informacionRutinaPresentVerb.indiceVerboValidar);
  }

  reproducir(){
    this.audioService.reproducir(this.informacionRutinaPresentVerb.verbos[this.informacionRutinaPresentVerb.indiceVerboRetrocesoTemporal]);
  }

  hoyRealizoAprender(): boolean{
    return this.transformarDate(this.informacionSesionService.obtenerUltimaFechaAprendio()) < this.transformarDate(Date.now());
  } 

  transformarDate(date){
    return new DatePipe('en-LA').transform(date, 'shortDate'); 
  }

}
