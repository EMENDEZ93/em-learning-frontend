import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActualizarUltimafecharutina } from '../servicios/actualizar-ultimafecharutina';
import { Rutina } from '../dominio/rutina/rutina.model';
import { Hoja } from '../dominio/hoja/hoja.model';

@Injectable({
  providedIn: 'root'
})
export class PresentVerbService {

  constructor(private http: HttpClient) { }

  endpoint = 'https://boiling-forest-31476.herokuapp.com';

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

  public actualizarTemaPorCorreo(corre: string, tema: string) {
    return this.http.get(this.endpoint + '/api/present/verb//ultimafecharutina/' + corre + "/" + tema);
  }

  public getFilasRutina(idHoja: number): Observable<Rutina> {
    return this.http.get<Rutina>(this.endpoint + '/api/present/verb/filas/rutina/' + idHoja);
  }

  public updateRutinaById(idHoja: number): Observable<Hoja>{
    return this.http.get<Hoja>(this.endpoint+"/api/present/verb/hoja/rutina/" + idHoja);
  }

}
