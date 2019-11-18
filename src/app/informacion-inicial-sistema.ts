import { Injectable } from '@angular/core';

const TEMAS : any = [];

@Injectable({
    providedIn: 'root'
})
export class InformacionInicialSistema {

    constructor() { }

    public guardarTemas(temas: string[]){
        window.sessionStorage.removeItem(TEMAS);
        window.sessionStorage.setItem(TEMAS, JSON.stringify(temas));
    }
    
    public obtenerTemas() {
       return sessionStorage.getItem(TEMAS);
    }
    

}
