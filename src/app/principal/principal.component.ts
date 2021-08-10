import { Component, OnInit, Input } from '@angular/core';
import { InformacionSesionService } from '../sesion/informacion-sesion.service';
import { Router } from '@angular/router';
import { TemasService } from './temas.service';
import { InformacionInicialSistema } from '../informacion-inicial-sistema';
import { InformacionPresentVerbService } from '../sesion/informacion-present-verb.service';
import { Store } from '@ngrx/store';
import { AppState } from '../dominio/estado/estado.reducer';
import { Tema } from '../dominio/tema/tema.model';
import { temaSeleccionado } from '../dominio/usuario/usuario.actions';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  name_content: string;
  tabSeleccionado: any;
  temas : Tema[];

  constructor(private router: Router, private informacionSesionService: InformacionSesionService, private temasService: TemasService, private informacionInicialSistema: InformacionInicialSistema,
              private informacionPresentVerbService: InformacionPresentVerbService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.informacionSesionService.requiereIniciarSesion();
    
    this.store.select('usuario').subscribe(
      usuario => {
        this.temas = usuario.temas; 
      }
    );
  }

  content(tabSeleccionado){
    this.tabSeleccionado = tabSeleccionado['tema']; 
    this.store.dispatch(temaSeleccionado({tema: tabSeleccionado['tema'] }))
  }

  public cerrarsesion(){
    this.informacionSesionService.cerrarSession();
    this.router.navigate(['/login']);
  }


  hoyRealizoAprender(event, componente){
  }

  colorSegunValidacion(realizado) {
    if (realizado) {
      return 'btn-success';
    } else if (!realizado) {
      return 'btn-primary';
    }
  }

}
