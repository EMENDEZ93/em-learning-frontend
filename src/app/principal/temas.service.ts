import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Excel } from '../dominio/excel/excel.model';

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

  public getExcels(): Observable<Excel[]> {
    return this.http.get<Excel[]>(this.endpoint+"/api/present/verb/excels");
  }

}
