import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, HostListener, Input, NgZone, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { AudioService } from "../comun/audio/audio.service";
import { AppState } from "../dominio/estado/estado.reducer";
import { actualizarHoja } from "../dominio/usuario/usuario.actions";
import { Usuario } from "../dominio/usuario/usuario.model";
import { Opcion } from "../present-verb/opcion";
import { PresentVerbService } from "../present-verb/present-verb.service";

declare const annyang: any;

@Component({
	selector: 'app-speaking',
	templateUrl: './speaking.component.html',
	styleUrls: ['./speaking.component.css']
})
export class SpeakingComponent {
	voiceActiveSectionDisabled: boolean = true;
	voiceActiveSectionError: boolean = false;
	voiceActiveSectionSuccess: boolean = false;
	voiceActiveSectionListening: boolean = false;
	//voiceText: '';
	voiceText: string = '';
	voiceTextPivot: string = '';

	constructor(
		private ngZone: NgZone,
		public http: HttpClient,
		private presentVerbService: PresentVerbService,
		private audioService: AudioService,
		private store: Store<AppState>) { }


	initializeVoiceRecognitionCallback(): void {
		annyang.addCallback('error', (err) => {
			if (err.error === 'network') {
				this.voiceText = 'Internet is require';
				annyang.abort();
				this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
			} else if (this.voiceText === undefined) {
				this.ngZone.run(() => this.voiceActiveSectionError = true);
				annyang.abort();
			}
		});

		annyang.addCallback('soundstart', (res) => {
			this.ngZone.run(() => this.voiceActiveSectionListening = true);
		});

		annyang.addCallback('end', () => {
			if (this.voiceText === undefined) {
				this.ngZone.run(() => this.voiceActiveSectionError = true);
				annyang.abort();
			}
		});

		annyang.addCallback('result', (userSaid) => {
			this.ngZone.run(() => this.voiceActiveSectionError = false);
			let queryText: any = userSaid[0];
			annyang.abort();

			this.voiceText = queryText;
			this.verboEntrada = this.voiceText;
			this.ngZone.run(() => this.voiceActiveSectionListening = false);
			this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
			this.validarSpeaking(this.voiceText);

		});
	}

	startVoiceRecognition(): void {
		this.voiceActiveSectionDisabled = false;
		this.voiceActiveSectionError = false;
		this.voiceActiveSectionSuccess = false;
		this.voiceText = undefined;

		if (annyang) {
			let commands = {
				'demo-annyang': () => { }
			};
			annyang.addCommands(commands);
			this.initializeVoiceRecognitionCallback();
			annyang.start({ autoRestart: false });
		}
	}

	closeVoiceRecognition(): void {
		this.voiceActiveSectionDisabled = true;
		this.voiceActiveSectionError = false;
		this.voiceActiveSectionSuccess = false;
		this.voiceActiveSectionListening = false;
		this.voiceText = undefined;

		if (annyang) {
			annyang.abort();
		}
	}

	validarSpeaking(voiceText: string) {
		console.log("----------- validarSpeaking ------------")
		console.log(voiceText)
		if (voiceText != null && voiceText.trim() != '') {

			if (voiceText.toUpperCase() == this.usuario.sistema.hojaSeleccionado
				.rutina.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar].toUpperCase()) {
				console.log("Exitosoooooooooooooooooooooooooooooo")
				this.validarVerboEntredaConVerboRutina(voiceText);
				this.voiceText = '';

			} else {

				if (this.voiceText != null && this.voiceText.trim() != '') {
					var arrayVoiceTextOriginal =  voiceText.match(this.patt1);
					var arrayVoiceTextUnion = (this.voiceTextPivot + voiceText).match(this.patt1);
					var arrayEsperado = this.usuario.sistema.hojaSeleccionado.rutina.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar].match(this.patt1);
					var arrayEsperadoString = this.usuario.sistema.hojaSeleccionado.rutina.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar].toUpperCase();

					console.log(arrayVoiceTextUnion)
					console.log(arrayEsperado)

					let i;
					let verbos = '';

					for (i = 0; i < arrayEsperado.length; i++) {
						if (i >= arrayVoiceTextUnion.length) {
							break;
						}

						if (arrayEsperado[i].toUpperCase() != arrayVoiceTextUnion[i].toUpperCase()) {
							break;
						}
					}

					if (i > 0) {
						for (let x = 0; x < (parseInt(i)); x++) {
							verbos = verbos + arrayEsperado[x] + ' ';
						}
					}

					let ioriginal;
					let verbosOriginal = '';

					for (ioriginal = 0; ioriginal < arrayEsperado.length; ioriginal++) {
						if (ioriginal >= arrayVoiceTextOriginal.length) {
							break;
						}

						if (arrayEsperado[ioriginal].toUpperCase() != arrayVoiceTextOriginal[ioriginal].toUpperCase()) {
							break;
						}
					}

					if (ioriginal > 0) {
						for (let x = 0; x < (parseInt(ioriginal)); x++) {
							verbosOriginal = verbosOriginal + arrayEsperado[x] + ' ';
						}
					}



					if(verbos != null && verbos.trim() != '' && verbosOriginal != null && verbosOriginal.trim() != '' ) {
						if(verbosOriginal.match(this.patt1).length > verbos.match(this.patt1).length) {
							this.voiceTextPivot =verbosOriginal; 
						} else if(verbos.match(this.patt1).length >  verbosOriginal.match(this.patt1).length) {
							this.voiceTextPivot = verbos; 
						} else {
							this.voiceTextPivot = verbos; 
						}						
					} else if ( verbos != null && verbos.trim() != '' && verbosOriginal == null || verbosOriginal.trim() == '') {
						this.voiceTextPivot = verbos; 
					} else if ( verbosOriginal != null && verbosOriginal.trim() != '' && verbos == null || verbos.trim() == '') {
						this.voiceTextPivot = verbosOriginal; 
					}


					console.log(arrayEsperadoString)
					console.log(this.voiceTextPivot.toUpperCase())
					console.log(arrayEsperadoString.length)
					console.log(this.voiceTextPivot.toUpperCase().length)
					console.log(arrayEsperadoString === this.voiceTextPivot.toUpperCase())


					console.log(verbos)
					console.log(verbosOriginal)
					console.log(this.voiceTextPivot)
					this.voiceText = this.voiceTextPivot;

					if((arrayEsperadoString + " ").replace(/\?/g, "").replace(/\,/g, '').replace(/\./g, '') == this.voiceTextPivot.toUpperCase()) {
						console.log("Exitoso 222222222222222222222")
						this.validarVerboEntredaConVerboRutina(arrayEsperadoString);
						this.voiceText = '';
					} else {
						this.verboEntrada = this.voiceTextPivot;
					}


				}

			}


		}



	}


	// ************************


	usuario: Usuario = new Usuario();
	hojaActual: string = "";

	@Input() hojaTemaExcel: any;
	@ViewChild('formulario', { static: false }) formulario;

	verboEntrada: string;

	barraProgreso = 0;
	colorBarraProgreso = 'alert alert-danger';
	colorSegunValidacionClass = 'border border-primary validacionVacia';
	cantidadVerbosReproducir = 0;
	patt1 = /\w+/g;
	hoyYaRealizoAprender = true;
	numeroPalabras = 0;


	ngOnInit() {
		//this.obtenerRutina();
	}


	obtenerRutina() {
		this.store.select('usuario').subscribe(
			usuario => {
				this.usuario = usuario;
				this.activarAyuda = false;
				if(usuario.sistema.accion === "speaking") {
					if ( (this.isEmpty(this.usuario) || this.isEmpty(this.usuario.sistema.hojaSeleccionado.rutina) || this.hojaActual !== usuario.sistema.hojaSeleccionado.nombre)) {	  
						this.presentVerbService.getFilasRutina(usuario.sistema.hojaSeleccionado.id).subscribe(
							(rutina) => {
								this.hojaActual = usuario.sistema.hojaSeleccionado.nombre;
								rutina.numeroVerbosAprender = rutina.english.length;
								rutina.indiceVerboRetrocesoTemporal = 0;
								rutina.indiceVerboValidar = 0;
								rutina.indicesVerbosAprendidos = [];
								rutina.indicesVerbosRepasados = [];
								rutina.numeroVerbosRutina = rutina.english.length;
								usuario.sistema.hojaSeleccionado.tipo = "B";
								usuario.sistema.hojaSeleccionado.rutina = rutina;
								this.barraProgreso = 0;
								this.hoyYaRealizoAprender = this.ultimaFechaAprendidaEsHoy(usuario.sistema.hojaSeleccionado.ultimaFechaSpeaking);;
								this.ingresarInformacionRutina();
								this.getNumeroPalabras();
							}, (error) => { }
						)

					}

				}
			}

		)
		console.log("************* Fin obtenerRutina ****************** ")
	}


	@Input() editable: boolean = true;
	@Input() showOptions: boolean = false;
	opciones: Opcion[] = [];
	validarVerboEntredaConVerboRutina(verboEntrada) {
		if (this.estaRutinaCompletada()) {
			this.actualizarPerfil();
		} else if (this.esIgualVerbEntradaVerboRutina(verboEntrada)) {
			if (this.activarAyuda) {

				setTimeout(() => {
					this.formulario.resetForm();
					this.verboEntradaInput.nativeElement.focus();
				}, 1);
				this.reproducir();

				if (this.repeticionesPorAyuda == 5) {
					this.activarAyuda = false;
					this.repeticionesPorAyuda = 0;
					this.continuarSiguienteVerbo();
					this.getNumeroPalabras();

				} else {
					this.repeticionesPorAyuda++;
				}

			} else {
				this.continuarSiguienteVerbo();
				this.getNumeroPalabras();
			}
		}
	}

	continuarSiguienteVerbo() {
		this.editable = false;
		this.showOptions = true;

		const cuatro = false;
		let indices: number[] = [];

		while (!cuatro) {

			let indiceAleatoreo = Math.floor(Math.random() * this.usuario.sistema.hojaSeleccionado.rutina.numeroVerbosRutina) + 0;
			if (!indices.includes(indiceAleatoreo)) {
				indices.push(indiceAleatoreo);
			}

			if (indices.length == 4) {
				if (!indices.includes(this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar)) {
					indices = [];
				}
			}

			if (this.usuario.sistema.hojaSeleccionado.rutina.numeroVerbosRutina < 4 && indices.length == this.usuario.sistema.hojaSeleccionado.rutina.numeroVerbosRutina) {
				break;
			}

			if (indices.length == 4) {
				break;
			}
		}
		this.opciones = []
		indices.forEach(element => {
			this.opciones.push(new Opcion(this.usuario.sistema.hojaSeleccionado.rutina.spanish[element], element))
		});
	}

	@ViewChild("verboEntradaInput", { static: false }) verboEntradaInput: ElementRef;
	validarTraductorSeleccionado(indiceOpcion) {
		if (indiceOpcion == this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar) {

			this.actualizarVerbosAprendidos();
			this.obtenerIndiceAleatoreo();
			this.reproducir();
			this.actualizarBarraProgreso();

			if (this.estaRutinaCompletada()) {
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

	key: string;
	@HostListener('document:keydown', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) {
		this.key = event.key;

		if (this.showOptions) {
			document.getElementById(event.key).click();
		}
		if (this.key === "Control") {
			document.getElementById(event.key).click();
			console.log("zz")

		}
		if (this.key === "ArrowLeft") {
			console.log(this.key)
		}
		if (this.key === "Enter") {
			document.getElementById(event.key).click();
		}
		if (this.key === "ArrowDown") {
			document.getElementById(event.key).click();
		}

		console.log(event.key)

	}

	private actualizarPerfil() {
		if (!this.ultimaFechaAprendidaEsHoy(this.usuario.sistema.hojaSeleccionado.ultimaFechaRutina)) {
			console.log("[actualizarPerfil]")
			this.presentVerbService.updateSpeakingById(this.usuario.sistema.hojaSeleccionado.id).subscribe(
				(hoja) => {
					this.usuario.sistema.hojaSeleccionado = hoja;
					this.usuario.sistema.hojaSeleccionado.realizadoSpeakingHoy = true;
					this.usuario.sistema.hojaSeleccionado.speaking = false;
					this.store.dispatch(actualizarHoja({ hojaSeleccionado: this.usuario.sistema.hojaSeleccionado }))
				}, (error) => {
					console.log(error)
				});

		} else {
			console.log("Ya esta actualizado [actualizarPerfil]")
		}

	}

	private esIgualVerbEntradaVerboRutina(verboEntrada: any) {
		return verboEntrada.toUpperCase() == this.usuario.sistema.hojaSeleccionado.rutina.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar].toUpperCase();
	}

	ingresarInformacionRutina() {
		this.obtenerIndiceAleatoreo();
		this.reproducir();
	}

	obtenerIndiceAleatoreo() {
		const existeMasVerbosPorRepasar = true;

		if (this.usuario.sistema.hojaSeleccionado.rutina.orden) {
			while (existeMasVerbosPorRepasar) {
				if (this.estaRutinaCompletada()) {
					break;
				}
				const indiceAleatoreo = this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar++;
				if (!this.usuario.sistema.hojaSeleccionado.rutina.indicesVerbosRepasados.includes(indiceAleatoreo)) {
					this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar = indiceAleatoreo;
					break;
				}
			}
		} else {
			while (existeMasVerbosPorRepasar) {
				if (this.estaRutinaCompletada()) {
					break;
				}
				const indiceAleatoreo = Math.floor(Math.random() * this.usuario.sistema.hojaSeleccionado.rutina.numeroVerbosRutina) + 0
				if (!this.usuario.sistema.hojaSeleccionado.rutina.indicesVerbosRepasados.includes(indiceAleatoreo)) {
					this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar = indiceAleatoreo;
					break;
				}
			}

		}
	}

	estaRutinaCompletada() {
		const rutinaCompletada = Array.from({ length: this.usuario.sistema.hojaSeleccionado.rutina.numeroVerbosRutina }, (v, k) => k);
		const rutinaActual = this.usuario.sistema.hojaSeleccionado.rutina.indicesVerbosRepasados;
		if (this.isEmpty(rutinaActual)) {
			return false;
		}
		return JSON.stringify(rutinaCompletada.sort()) == JSON.stringify(rutinaActual.sort());
	}

	isEmpty(obj) {
		try {
			console.log("is Empty -> ");
			console.log(obj);
			if (undefined === obj) return true;
			return Object.keys(obj).length === 0;	
		} catch (ex) {
			return true
		}
	}

	actualizarVerbosAprendidos() {
		this.usuario.sistema.hojaSeleccionado.rutina.indicesVerbosRepasados.push(this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar);
	}

	actualizarBarraProgreso() {
		this.activarAyuda = false;
		this.barraProgreso = (this.usuario.sistema.hojaSeleccionado.rutina.indicesVerbosRepasados.length / this.usuario.sistema.hojaSeleccionado.rutina.numeroVerbosRutina) * 100;
	}

	reproducir() {
		if (!this.ultimaFechaAprendidaEsHoy(this.usuario.sistema.hojaSeleccionado.ultimaFechaRutina) && !this.estaRutinaCompletada()) {
			console.log("Reproduccion:SpeakingComponente");
			this.audioService.reproducir(this.usuario.sistema.hojaSeleccionado.rutina.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar]);
		}
		this.getNumeroPalabras();
	}


	activarAyuda = false
	palabraActual = '';
	repeticionesPorAyuda: number;
	mostrarAyuda() {
		if (!this.estaRutinaCompletada()) {
			this.activarAyuda = true
			this.palabraActual = this.usuario.sistema.hojaSeleccionado.rutina.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar] + " / " +
				this.usuario.sistema.hojaSeleccionado.rutina.spanish[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar];

			this.repeticionesPorAyuda = 0;
		}
	}


	colorSegunValidacion(verboEntrada) {
		if (verboEntrada.trim() == "") {
			this.colorSegunValidacionClass = 'border border-primary validacionVacia';
		} else if (this.usuario.sistema.hojaSeleccionado.rutina.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar].toUpperCase().includes(verboEntrada.toUpperCase())) {
			this.colorSegunValidacionClass = 'border border-success validacionExitosa';
		} else {
			this.colorSegunValidacionClass = 'border border-danger validacionError';
		}
	}

	reproducirSiguientePalabra() {
		this.audioService.reproducir(this.obtenerSiguientePalabra());
	}

	obtenerSiguientePalabra() {
		var arrayEsperado = this.usuario.sistema.hojaSeleccionado.rutina.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar].match(this.patt1);
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
		this.audioService.reproducir(this.palabraActual);
	}


	public ultimaFechaAprendidaEsHoy(ultimaFechaAprendio: Date): boolean {
		if(undefined === ultimaFechaAprendio) {
		  return false;
		}
		return new Date(this.transformarDate(ultimaFechaAprendio) ) >= new Date(  this.transformarDate(Date.now()) );
	  }

	private transformarDate(date) {
		return new DatePipe('en-LA').transform(date, 'shortDate');
	}


	spelling() {

		if (
			this.formulario.form.value["in"] === undefined ||
			this.formulario.form.value["in"] === null ||
			this.formulario.form.value["in"].trim() === ''
		) {
			let spell = this.usuario.sistema.hojaSeleccionado.rutina
				.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar].toUpperCase();

			if (spell.includes(" ")) {
				this.audioService.reproducir(spell.split(' ')[0].split(""));
			} else {
				this.audioService.reproducir(spell.split("").toString());
			}
		} else {

			let spell = this.usuario.sistema.hojaSeleccionado.rutina
				.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar].toUpperCase()
				.replace(this.formulario.form.value["in"].toUpperCase(), "")
				.split("").toString();

			if (spell.startsWith(" ")) {
				spell = spell.substring(2);
				if (spell.includes(" ")) {
					spell = spell.split(', ')[0];
				}
			}

			if (spell.includes(" ")) {
				spell = spell.split(', ')[0];
			}

			this.audioService.reproducir(spell);
		}

		this.verboEntradaInput.nativeElement.focus();
	}


	getNumeroPalabras() {
		var arrayEsperado = this.usuario.sistema.hojaSeleccionado.rutina.english[this.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar].match(this.patt1);
		this.numeroPalabras = arrayEsperado.length;
	}


}