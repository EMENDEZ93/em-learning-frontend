import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrerService } from './registrer.service';
import Swal from 'sweetalert2'
import { Registrer } from '../login/register';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {

registrerFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private registerServices: RegistrerService,
    private router: Router) { }

  
  ngOnInit() {
    this.registrerFormGroup = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  crearusuario(){
    if(this.registrerFormGroup.invalid) return;

    Swal.fire({
      title: 'Auto close alert!',
      didOpen: () => {
        Swal.showLoading()

      }})


    const {nombre, correo, password} = this.registrerFormGroup.value;
    this.registerServices.crearUsuario(nombre, correo, password).then(
      informacion => {
        console.log(informacion.user.uid);

        var perfil = new Registrer(informacion.user.uid, correo, password);
        this.registerServices.register(perfil).subscribe();

        Swal.close();
        this.router.navigate(['/login']);
      }
    )
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        footer: '<a href="">Why do I have this issue?</a>'
      })
    });

  }

  login() {
    this.router.navigate(['/login']);
  }

}
