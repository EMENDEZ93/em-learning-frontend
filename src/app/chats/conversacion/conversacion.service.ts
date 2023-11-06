import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment_url } from "src/environments/environment";
import { Oracion } from '../../dominio/conversacion/oracion.model';


@Injectable({
    providedIn: 'root'
})  
export class ConversacionService {
 
    constructor(private http: HttpClient) { }
    private endpoint = environment_url;
  
    public executer(idHoja: number): Observable<Oracion[]> {
        return this.http.get<Oracion[]>(this.endpoint+"/api/present/verb/conversacion/" + idHoja);
    }
}