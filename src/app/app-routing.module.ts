import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent 
  },
  {
    path:'home',
    component: PrincipalComponent 
  },  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'register',
    component: RegistrerComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
