import { Component, OnInit, ViewChild, Input, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PresentVerbAprenderService } from './present-verb-aprender.service';
import { ActualizarPerfilPresentVerb } from './actualizar-perfil-present-verb';
import { AudioService } from '../comun/audio/audio.service';
import { Store } from '@ngrx/store';
import { AppState } from '../dominio/estado/estado.reducer';
import { actualizarHoja } from '../dominio/usuario/usuario.actions';
import { Usuario } from '../dominio/usuario/usuario.model';
import { DatePipe } from '@angular/common';
import { Example } from '../dominio/rutina/example.model';

const ELEMENT_DATA = [
  { name: 'Lorem'},
  { name: 'Quas!'}
];

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

  displayedColumns: string[] = ['name']; 
  dataSource = ELEMENT_DATA;

  @ViewChild("verboEntradaInput", {static: false}) verboEntradaInput;

  actualizarPerfilPresentVerb: ActualizarPerfilPresentVerb;

  @Input() hojaTemaExcel: any;
  usuario: Usuario;
  hojaActual: string = "";

  verboEntrada: string;
  spanishVerbo: string;
  englishVerbo: string;
  images: string;
  foneticaVerbo: string;
  slangVerbo: string;
  examples: Example[];
  numero_examples: number;

  repeticionesAltaComoAprendidoTemporal = 0;
  barraProgreso = 0;
  colorBarraProgreso = 'alert alert-danger';
  colorSegunValidacionClass = 'border border-primary validacionVacia';
  hoyYaRealizoAprender = true;
  numeroPalabras = 0;
  cantidadVerbosReproducir = 0;
  patt1 = /\w+/g;

  estado = false;
  base64Image: string = '';

  constructor(
    public http: HttpClient,
    private presentVerbService: PresentVerbAprenderService,
    private audioService: AudioService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.getRutina();
  }

  getRutina() {
    this.getUsuario(true);
  }

  getUsuario(estade: boolean) {
    this.store.select('usuario').subscribe(
      usuario => {
        if(usuario.sistema.accion === "aprender") {
          if (  this.isEmpty(this.usuario) || 
                this.isEmpty(this.usuario.sistema.hojaSeleccionado.aprender) || 
                this.hojaActual !== usuario.sistema.hojaSeleccionado.nombre
          ) {         
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
      } else {
        console.log("*************** elsessssssssssssss **************************")
      }

      },
      (error) => {
        console.log("*****************************************")
        console.log(error)
      }
    );
  }


  isEmpty(obj) {
    if (obj === undefined) return true;
    return Object.keys(obj).length === 0;
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

  obtenerSiguienteIndice() {
    if (!this.estaRutinaCompletada()) {
      if (this.esIgualrIndiceVerboRetrocesoTemporalIndiceVerboValidar()) {
          this.actualizarVerbosAprendidos();
          this.actualizarBarraProgreso();
          this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboValidar++;      
          this.repeticionesAltaComoAprendidoTemporal = 1;
          this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal++;    
      } else {
        this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal++;
      }

    } else {
      console.log('------- Rutina Completada 2 --------')
    }
  }

  private esIgualRepeticionAlcaComoAprendioTemporalRepeticionAltaComoAprendido() {
    return this.repeticionesAltaComoAprendidoTemporal >= this.usuario.sistema.hojaSeleccionado.repeticionesAltaComoAprendido;
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

      this.slangVerbo = this.usuario.sistema.hojaSeleccionado.aprender.allSpeakFast[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal];

      // if que valida que no sea diferente de NO_APLICA
      if (this.slangVerbo !== "NO_APLICA") {
        this.audioService.reproducir(this.slangVerbo);
      } else {
        this.audioService.reproducir(this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]);
      }
      
      this.spanishVerbo = this.usuario.sistema.hojaSeleccionado.aprender.spanish[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.englishVerbo = this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.foneticaVerbo = this.usuario.sistema.hojaSeleccionado.aprender.fonetica[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.images = this.usuario.sistema.hojaSeleccionado.aprender.images[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]

      this.usuario.sistema.hojaSeleccionado.aprender.example[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal];

      this.examples = this.usuario.sistema.hojaSeleccionado.aprender.example[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal];
      this.numero_examples = 0

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
    } else if (this.examples[this.numero_examples].english.toUpperCase().includes(verboEntrada.toUpperCase())) {
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
    
    if (!this.usuario.sistema.hojaSeleccionado.realizadoHoy && 
         this.usuario.sistema.hojaSeleccionado.aprender.english.length > 0 ) {

      var arrayEsperado = this.usuario.sistema.hojaSeleccionado.aprender
        .english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal].match(this.patt1);
      var arrayActual = this.verboEntrada == null || 
                        this.verboEntrada.trim() == '' ? [''] : this.verboEntrada.match(this.patt1);
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

  public ultimaFechaAprendidaEsHoyDos(ultimaFechaAprendio: Date): boolean {
    if(undefined === ultimaFechaAprendio) {
      return false;
    }
    return new Date(this.transformarDate(ultimaFechaAprendio) ) >= new Date(  this.transformarDate(Date.now()) );
  }

  private transformarDate(date){
    return new DatePipe('en-LA').transform(date, 'shortDate'); 
  }

  autocompletar() {
    if (this.numero_examples >= 0 && this.numero_examples < this.examples.length) {
      
      const speakFast = this.examples[this.numero_examples].speakFast;

      if (speakFast !== 'NO_APLICA' && speakFast !== '' && speakFast !== null && speakFast !== undefined) {
        //this.audioService.reproducir(speakFast);
        this.reproducirCallBak_(speakFast);

      } else {
        //this.audioService.reproducir(this.examples[this.numero_examples].english);
        this.reproducirCallBak_(this.examples[this.numero_examples].english);
      }
  
      // Restablecer el color de fondo de todas las celdas a negro
      this.resetRowColors();
  
      const row = document.getElementById(`fila_${this.numero_examples}`);
      const row_fonetica = document.getElementById(`fila_${this.numero_examples}_fonetica`);
      const row_spanish = document.getElementById(`fila_${this.numero_examples}_spanish`);
      if (row) {
        row.style.backgroundColor = '#022802';
        row.style.fontWeight = 'bold';
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (row_fonetica) {
        row_fonetica.style.backgroundColor = '#022802';
      }

      if (row_spanish) {    
        row_spanish.style.backgroundColor = '#022802';
      }

      this.numero_examples++;
    } else {
      this.verboEntrada = this.usuario.sistema.hojaSeleccionado.aprender.english[
        this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal
      ];
  
      this.validarVerboEntredaConVerboPorAprender(this.verboEntrada);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.resetRowColors();
      const row = document.getElementById('th_main');
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private resetRowColors(): void {
    const rows = document.querySelectorAll('tr');
    rows.forEach(row => {
      row.style.backgroundColor = 'black';
    });
  }

  validarVerboEntredaConVerboPorAprender(verboEntrada) {
    if (this.esIgualVerbEntradaVerboRutina(verboEntrada)) {
      this.configuracionAprender();
      if (this.estaRutinaCompletada()) {
        this.actualizacionPerfil();
      }
    }
  }

  validarVerboEntredaConVerboPorAprenderV2(verboEntrada) {
    if (this.examples[this.numero_examples].english.toUpperCase() === verboEntrada.toUpperCase()) {
      this.autocompletar();
      this.verboEntradaInput.resetForm();
    }
  }

  @Input() editable: boolean = true;
  @Input() showOptions: boolean = false;
  validateInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    const match = this.examples.find(example => example.english.toLowerCase() === input.toLowerCase());
    if (match) {
      console.log('Match found:', match);
    } else {
      console.log('No match found');
    }
  }

  key : string;
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.key = event.key;
    
    if(this.key === "Control" ){
      this.autocompletar();
    }
    
    if(this.key === "ArrowRight" ){

    if(this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal <= 
      this.usuario.sistema.hojaSeleccionado.aprender.spanish.length 
    ) {
      this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal++;
      this.spanishVerbo = this.usuario.sistema.hojaSeleccionado.aprender.spanish[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.englishVerbo = this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.foneticaVerbo = this.usuario.sistema.hojaSeleccionado.aprender.fonetica[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.images = this.usuario.sistema.hojaSeleccionado.aprender.images[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
      this.examples = this.usuario.sistema.hojaSeleccionado.aprender.example[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal];
      this.numero_examples = 0;
      this.hoyRealizoAprender();
      this.actualizarVerbosAprendidosX();
      this.actualizarBarraProgreso();
      this.hoyYaRealizoAprender = this.barraProgreso == 100;
      this.reproducir();
    }

    }

    if(this.key === "ArrowLeft" ){
     
      if(this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal <= 
        this.usuario.sistema.hojaSeleccionado.aprender.spanish.length && this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal >= 0
      ) {
        this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal--;
        this.spanishVerbo = this.usuario.sistema.hojaSeleccionado.aprender.spanish[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
        this.englishVerbo = this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
        this.foneticaVerbo = this.usuario.sistema.hojaSeleccionado.aprender.fonetica[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
        this.images = this.usuario.sistema.hojaSeleccionado.aprender.images[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]
        this.examples = this.usuario.sistema.hojaSeleccionado.aprender.example[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal];
        this.numero_examples = 0;
        this.hoyRealizoAprender();
        this.actualizarVerbosAprendidosX2();
        this.actualizarBarraProgreso();
        this.hoyYaRealizoAprender = this.barraProgreso == 100
        this.reproducir();
      }      
    }

    if(this.key === "Shift" ){
      this.audioService.detener();
    }

    if(this.key === " " ){
      if (this.slangVerbo !== "NO_APLICA") {
        this.audioService.reproducir(this.slangVerbo);
      } else {
        this.audioService.reproducir(this.usuario.sistema.hojaSeleccionado.aprender.english[this.usuario.sistema.hojaSeleccionado.aprender.indiceVerboRetrocesoTemporal]);
      }
    }
    

    console.log(event.key)
  }

  actualizarVerbosAprendidosX() {
    this.usuario.sistema.hojaSeleccionado.aprender.indicesVerbosAprendidos.push(0);
  }

  actualizarVerbosAprendidosX2() {
    const index = this.usuario.sistema.hojaSeleccionado.aprender.indicesVerbosAprendidos.indexOf(0);
    if (index > -1) {
      this.usuario.sistema.hojaSeleccionado.aprender.indicesVerbosAprendidos.splice(index, 1);
    }
  }

  reproducirCallBak_(verb: string) {
    this.audioService.reproducirCallBack(verb, () => {
      this.accionPostReproduccion();
    });
  }

  accionPostReproduccion() {
    if (this.numero_examples < this.examples.length) {
      this.autocompletar();
    }
  }

}
