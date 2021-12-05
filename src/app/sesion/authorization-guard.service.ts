import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../dominio/estado/estado.reducer";
import { Usuario } from "../dominio/usuario/usuario.model";

@Injectable({providedIn: "root"})
export class AuthorizationGuard implements CanActivate {

    usuario: Usuario = new Usuario();

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) {}

    canActivate(){

        console.log("______________________________________")

        this.store.select('usuario').subscribe(
            usuario => {
                this.usuario = usuario;
            }
          );

          if(this.isEmpty(this.usuario.correo)) {
            console.log("___________________ 1 ___________________")
            this.router.navigate(['login']);
            return false
          } else {
            console.log("___________________ 2 ___________________")
            return true;
          }
    }

    private isEmpty(obj) {
        if (obj === undefined) return true;
        return Object.keys(obj).length === 0;
    }   
}