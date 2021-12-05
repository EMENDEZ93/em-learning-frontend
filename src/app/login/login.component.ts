import { Component, OnInit, ViewChild } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
import { Router } from '@angular/router';
import { AppState } from '../dominio/estado/estado.reducer';
import { Store } from '@ngrx/store';
import { actualizar } from '../dominio/usuario/usuario.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { TemasService } from '../principal/temas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;

  loginFormGroup: FormGroup;

  constructor(private router: Router, private autenticacionService: AutenticacionService,
    private temaService: TemasService,
    private store: Store<AppState>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.isLoggedIn = false;
    this.loginFormGroup = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  autenticar() {
    if (this.loginFormGroup.invalid) return;
    Swal.fire({
      title: 'Auto close alert!',
      didOpen: () => {
        Swal.showLoading();
      }
    })
    const { correo, password } = this.loginFormGroup.value;
    this.autenticacionService.login(correo, password).then(
      credenciales => {
        this.temaService.getExcels().subscribe(
          excels => {
            this.store.dispatch(actualizar({ id: credenciales.user.uid, correo: correo, excels: excels }));
          }
        );
        Swal.close();
        this.router.navigate(['/home']);
      }
    ).catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        footer: '<a href="">Why do I have this issue?</a>'
      })

    });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
