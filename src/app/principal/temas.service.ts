import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tema } from '../dominio/tema/tema.model';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  constructor(private http: HttpClient) { }

  private endpoint = 'https://boiling-forest-31476.herokuapp.com';

  // Validar y borrar
  public obtenerTemas():  Observable<string[]> { 
    return this.http.get<string[]>(this.endpoint+"/api/present/verb/temas/edwin.mendez@em.com.co");
  }
  

  public getTemasByCorreo(correo: string):  Observable<Tema[]> { 
    return this.http.get<Tema[]>(this.endpoint+"/api/present/verb/temas/" + correo);
  }

}
