import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }
  
  private reproductor : any;

  reproducir(verb){
    const audioGeneroAleatorio = this.obtenerAudioGeneroAleatorio();
    this.reproductor = new SpeechSynthesisUtterance(verb);
    this.reproductor.default= false;
    this.reproductor.lang= audioGeneroAleatorio == 1 ? "en-GB" : "en-US";
    this.reproductor.localService = false;
    this.reproductor.name= audioGeneroAleatorio == 1 ? "Google UK English Female" : "Microsoft Zira Desktop - English (United States)";
    this.reproductor.voiceURI = audioGeneroAleatorio == 1 ? "Google UK English Female" : "Microsoft Zira Desktop - English (United States)";

    (<any>window).speechSynthesis.speak(this.reproductor);  
  }


  private obtenerAudioGeneroAleatorio(): number{
    const indiceAleatoreo = Math.floor(Math.random() * 2) + 0 
    return indiceAleatoreo;
  }

}
