import { Component, OnInit } from '@angular/core';
import { InformacionInicialSistema } from './informacion-inicial-sistema';
import { TemasService } from './principal/temas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'em-learning';

  constructor(private informacionInicialSistema: InformacionInicialSistema, private temasService: TemasService){
  }

  ngOnInit(): void {
    this.temasService.obtenerTemas().subscribe(
      (temas) => {
        this.informacionInicialSistema.guardarTemas(temas);
      }, (error) => {

      }
    )

  }
  

}
