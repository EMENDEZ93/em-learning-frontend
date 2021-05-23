import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformacionPresentVerb } from '../sesion/informacion-present-verb';
import { ActualizarPerfilPresentVerb } from './actualizar-perfil-present-verb';

@Injectable({
  providedIn: 'root'
})
export class PresentVerbAprenderService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://192.168.1.9:81';

  public obtenerRutina(ultimoIndiceVerboAprendido, numeroVerbosPorAprenderDiario, hojaTemaExcel):  Observable<string[]> { 

    console.log("[obtenerRutina]")
    console.log(ultimoIndiceVerboAprendido)
    console.log(numeroVerbosPorAprenderDiario)
    console.log(hojaTemaExcel)

    return this.http.get<string[]>(this.endpoint+"/api/present/verb/verbosporaprender/" + ultimoIndiceVerboAprendido + "/" + numeroVerbosPorAprenderDiario+"/" + hojaTemaExcel);
  
  
  }

  public obtenerPerfil(email, hojaTemaExcel) { 
    console.log("[obtenerPerfil]")
    console.log(email)
    console.log(hojaTemaExcel['tema'])
    return this.http.get<InformacionPresentVerb>(this.endpoint+"/api/present/verb/perfil/" + email+ "/" + hojaTemaExcel['tema']);
  }

  public actualizarPerfil(actualizarPerfilPresentVerb: ActualizarPerfilPresentVerb){
    console.log("[actualizarPerfil]")
    console.log(actualizarPerfilPresentVerb)
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post(this.endpoint+"/api/present/verb/perfil", JSON.stringify(actualizarPerfilPresentVerb), httpOptions);
  }


  public obtenerPreguntas(ultimoIndiceVerboAprendido, numeroVerbosPorAprenderDiario, hojaTemaExcel){ 
    return this.http.get<string[]>(this.endpoint+"/api/present/verb/preguntas/" + ultimoIndiceVerboAprendido + "/" + numeroVerbosPorAprenderDiario+"/" + hojaTemaExcel);
  }

}
