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

    console.log("[ngOnInit -> Temas ]")

    this.temasService.obtenerTemas().subscribe(
      (temas) => {
        console.log(temas)
        this.informacionInicialSistema.guardarTemas(temas);
      }, (error) => {

      }
    )

  }
  

}
