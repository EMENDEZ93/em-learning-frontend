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
    this.reproductor.default= speechSynthesis.getVoices()[audioGeneroAleatorio].default
    this.reproductor.lang= speechSynthesis.getVoices()[audioGeneroAleatorio].lang
    this.reproductor.localService= speechSynthesis.getVoices()[audioGeneroAleatorio].localService
    this.reproductor.name= speechSynthesis.getVoices()[audioGeneroAleatorio].name
    this.reproductor.voiceURI = speechSynthesis.getVoices()[audioGeneroAleatorio].voiceURI;
    (<any>window).speechSynthesis.speak(this.reproductor);  
  }


  private obtenerAudioGeneroAleatorio(): number{
    const voces = [1, 4];
    const indiceAleatoreo = Math.floor(Math.random() * 2) + 0 
    return voces[indiceAleatoreo];
  }

}
