import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActualizarUltimafecharutina } from '../servicios/actualizar-ultimafecharutina';
import { Tema } from '../dominio/tema/tema.model';
import { Rutina } from '../dominio/rutina/rutina.model';

@Injectable({
  providedIn: 'root'
})
export class PresentVerbService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:8091';

  public obtenerRutinaRepasoByConfiguracion(tema: Tema):  Observable<Rutina> { 
    return this.http.get<Rutina>(this.endpoint + '/api/present/verb/' + tema.configuracion.ultimoIndiceAprendido + "/" + tema.indiceExcel);
  }

  public obtenerRutina(ultimoIndiceVerboAprendido, hojaTemaExcel):  Observable<string[]> { 
    return this.http.get<string[]>(this.endpoint + '/api/present/verb/' + ultimoIndiceVerboAprendido + "/" + hojaTemaExcel);
  }

  public obtenerPreguntasRutina(ultimoIndiceVerboAprendido, hojaTemaExcel):  Observable<string[]> { 
    return this.http.get<string[]>(this.endpoint + '/api/present/verb/preguntas/' + ultimoIndiceVerboAprendido + "/" + hojaTemaExcel);
  }

  public actualizarPerfil(actualizarUltimafecharutina: ActualizarUltimafecharutina){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post(this.endpoint+"/api/present/verb/ultimafecharutina", JSON.stringify(actualizarUltimafecharutina), httpOptions);
  }


}
