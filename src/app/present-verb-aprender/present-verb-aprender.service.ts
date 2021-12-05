import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActualizarPerfilPresentVerb } from './actualizar-perfil-present-verb';
import { Usuario } from '../dominio/usuario/usuario.model';
import { Configuracion } from '../dominio/tema/configuracion/configuracion.model';
import { Rutina } from '../dominio/rutina/rutina.model';
import { Hoja } from '../dominio/hoja/hoja.model';
import { Sistema } from '../dominio/sistema/sistema.model';

@Injectable({
  providedIn: 'root'
})
export class PresentVerbAprenderService {

  constructor(private http: HttpClient) { }

  endpoint = 'https://boiling-forest-31476.herokuapp.com';

  public obtenerRutina(ultimoIndiceVerboAprendido, numeroVerbosPorAprenderDiario, hojaTemaExcel):  Observable<string[]> { 
    return this.http.get<string[]>(this.endpoint+"/api/present/verb/verbosporaprender/" + ultimoIndiceVerboAprendido + "/" + numeroVerbosPorAprenderDiario+"/" + hojaTemaExcel);  
  }

  public actualizarPerfil(actualizarPerfilPresentVerb: ActualizarPerfilPresentVerb){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post(this.endpoint+"/api/present/verb/tema", JSON.stringify(actualizarPerfilPresentVerb), httpOptions);
  }


  public obtenerPreguntas(ultimoIndiceVerboAprendido, numeroVerbosPorAprenderDiario, hojaTemaExcel){ 
    return this.http.get<string[]>(this.endpoint+"/api/present/verb/preguntas/" + ultimoIndiceVerboAprendido + "/" + numeroVerbosPorAprenderDiario+"/" + hojaTemaExcel);
  }


  public getHojasByExcelAndCorreo(excel: string, correo: string): Observable<Hoja[]> {
    return this.http.get<Hoja[]>(this.endpoint+"/api/present/verb/hojas/" + excel + "/" + correo);
  }

  public getRutinaByConfiguration(sistem: Sistema): Observable<Rutina> {
    return this.http.get<Rutina>(this.endpoint+"/api/present/verb/filas/aprender/" + sistem.hojaSeleccionado.id );
  }

  public getUpdateHojaById(idHoja : number): Observable<Hoja>{
    return this.http.get<Hoja>(this.endpoint+"/api/present/verb/hoja/" + idHoja);
  }

}
