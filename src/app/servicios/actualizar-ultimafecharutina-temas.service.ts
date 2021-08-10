import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActualizarUltimafecharutina } from './actualizar-ultimafecharutina';

@Injectable({
  providedIn: 'root'
})
export class ActualizarUltimafecharutinaTemasService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://192.168.1.9:81';


  public actualizarPerfil(actualizarUltimafecharutina: ActualizarUltimafecharutina){

    console.log("************************** El problema esta aqui **************************")
    console.log(JSON.stringify(actualizarUltimafecharutina))

    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    //return this.http.get(this.endpoint+"/api/present/verb/ultimafecharutina/" + actualizarUltimafecharutina.correo + "/"+ actualizarUltimafecharutina.nombre);
    return this.http.post(this.endpoint+"/api/present/verb/fecha",httpOptions );
  }


}
