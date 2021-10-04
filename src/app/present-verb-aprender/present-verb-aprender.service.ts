import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformacionPresentVerb } from '../sesion/informacion-present-verb';
import { ActualizarPerfilPresentVerb } from './actualizar-perfil-present-verb';
import { Usuario } from '../dominio/usuario/usuario.model';
import { Configuracion } from '../dominio/tema/configuracion/configuracion.model';
import { Tema } from '../dominio/tema/tema.model';
import { Rutina } from '../dominio/rutina/rutina.model';

@Injectable({
  providedIn: 'root'
})
export class PresentVerbAprenderService {

  constructor(private http: HttpClient) { }

  endpoint = 'https://boiling-forest-31476.herokuapp.com';

  public obtenerRutina(ultimoIndiceVerboAprendido, numeroVerbosPorAprenderDiario, hojaTemaExcel):  Observable<string[]> { 
    return this.http.get<string[]>(this.endpoint+"/api/present/verb/verbosporaprender/" + ultimoIndiceVerboAprendido + "/" + numeroVerbosPorAprenderDiario+"/" + hojaTemaExcel);  
  }

  public obtenerRutinaByConfiguracion(tema: Tema):  Observable<string[]> {
    return this.http.get<string[]>(this.endpoint+"/api/present/verb/verbosporaprender/" + tema.configuracion.ultimoIndiceAprendido + "/" + tema.configuracion.numeroVerbosPorAprenderDiario+"/" + tema.indiceExcel);
  }

  public obtenerRutinaByConfiguracions(tema: Tema):  Observable<Rutina> { 
    return this.http.get<Rutina>(this.endpoint+"/api/present/verb/verbosporaprender/" + tema.configuracion.ultimoIndiceAprendido + "/" + tema.configuracion.numeroVerbosPorAprenderDiario+"/" + tema.indiceExcel);
  }

  public obtenerPerfilPorTema(usuario: Usuario) { 
    return this.http.get<Configuracion>(this.endpoint+"/api/present/verb/perfil/" + usuario.correo + "/" + usuario.sistema.temaSeleccionado.tema);
  }


  public actualizarPerfil(actualizarPerfilPresentVerb: ActualizarPerfilPresentVerb){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post(this.endpoint+"/api/present/verb/tema", JSON.stringify(actualizarPerfilPresentVerb), httpOptions);
  }


  public obtenerPreguntas(ultimoIndiceVerboAprendido, numeroVerbosPorAprenderDiario, hojaTemaExcel){ 
    return this.http.get<string[]>(this.endpoint+"/api/present/verb/preguntas/" + ultimoIndiceVerboAprendido + "/" + numeroVerbosPorAprenderDiario+"/" + hojaTemaExcel);
  }

}
