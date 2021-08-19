import { Component, OnInit } from '@angular/core';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../dominio/estado/estado.reducer';
import { temaSeleccionado } from '../dominio/usuario/usuario.actions';
import { PresentVerbAprenderService } from '../present-verb-aprender/present-verb-aprender.service';
import { Usuario } from '../dominio/usuario/usuario.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private router: Router, 
    private informacionSesionService: InformacionSesionService,
    private store: Store<AppState>,
    private presentVerbService: PresentVerbAprenderService
  ) { }

  ngOnInit() {
    this.informacionSesionService.requiereIniciarSesion();
    this.actualizarUsuario();
  }

  content(tema){
    if(tema.configuracion == null) {
      this.usuario.sistema.temaSeleccionado = tema;
      this.presentVerbService.obtenerPerfilPorTema(this.usuario).subscribe(
        configuracion => {
          tema.configuracion = configuracion;
          this.store.dispatch(temaSeleccionado({ temaSeleccionado: tema }));
          this.actualizarUsuario();
        }
      )
    } else {
      this.store.dispatch(temaSeleccionado({ temaSeleccionado: tema }));
      this.actualizarUsuario();
    }
  }

  public cerrarsesion(){
    this.informacionSesionService.cerrarSession();
    this.router.navigate(['/login']);
  }

  colorSegunValidacion(realizado) {
    if (realizado) {
      return 'btn-success';
    } else if (!realizado) {
      return 'btn-primary';
    }
  }

  actualizarUsuario() {
    this.store.select('usuario').subscribe(
      usuario => {
        this.usuario = usuario;
      }
    );
  }


  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

}
