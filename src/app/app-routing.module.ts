import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { AuthorizationGuard } from './sesion/authorization-guard.service';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: PrincipalComponent,
    //canActivate: [AuthorizationGuard] 
  },
  {
    path:'register',
    component: RegistrerComponent 
  },
  {
    path:'**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
