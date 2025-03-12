import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }
  
  private reproductor : any;

  reproducirCallBack(verb: string, callback: () => void): void {
    const audioGeneroAleatorio = this.obtenerAudioGeneroAleatorio();
    this.reproductor = new SpeechSynthesisUtterance(verb);
    this.reproductor.default = false;
    this.reproductor.lang = "en-US";
    this.reproductor.localService = false;
    this.reproductor.name = "Google UK English Female";
    this.reproductor.voiceURI = "Google UK English Female";

    this.reproductor.pitch = audioGeneroAleatorio; // Velocidad de voz [0.1 - 10]
    this.reproductor.volume = 2;
    this.reproductor.rate = 2;

    // Definir el evento onend para detectar cuando termina la reproducción
    this.reproductor.onend = (event) => {
      //console.log("Reproducción terminada");
      // Llamar a la función callback cuando termine la reproducción
      callback();
    };

    // Reproducir el texto
    (<any>window).speechSynthesis.speak(this.reproductor);
  }

  reproducir(verb) {
    const audioGeneroAleatorio = this.obtenerAudioGeneroAleatorio();
    this.reproductor = new SpeechSynthesisUtterance(verb);
    this.reproductor.default = false;
    this.reproductor.lang = "en-US";
    this.reproductor.localService = false;
    this.reproductor.name = "Google UK English Female";
    this.reproductor.voiceURI = "Google UK English Female";
  
    this.reproductor.pitch = audioGeneroAleatorio; // velocidad de voz [0.1 - 10]
    this.reproductor.volume = 2; //
    this.reproductor.rate = 2;
  
    // Definir el evento onend para detectar cuando termina la reproducción
    this.reproductor.onend = function(event) {
      console.log("Reproducción terminada");
      // Aquí puedes agregar la lógica que desees después de que termine la reproducción
    };
  
    (<any>window).speechSynthesis.speak(this.reproductor);  
  }

  private obtenerAudioGeneroAleatorio(): number{
    const indiceAleatoreo = Math.floor(Math.random() * 10) + 0;
    console.log("indiceAleatoreo -> " + indiceAleatoreo);
    return indiceAleatoreo;
  }


  detener(): void {
   (<any>window).speechSynthesis.cancel();
    console.log("Reproducción detenida");
  }

}
