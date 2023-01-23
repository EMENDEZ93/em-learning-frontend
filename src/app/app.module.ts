import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { PresentVerbComponent } from './present-verb/present-verb.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PrincipalComponent } from './principal/principal.component';
import { PresentVerbAprenderComponent } from './present-verb-aprender/present-verb-aprender.component';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertModule } from 'ngx-bootstrap/alert';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { appStateReducers } from './dominio/estado/estado.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { RegistrerComponent } from './registrer/registrer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { ConversacionComponent } from './conversacion/conversacion.component';
import { TranslateComponent } from './translate/translate.component';
import { SpeakingComponent } from './speaking/speaking.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentVerbComponent,
    PrincipalComponent,
    PresentVerbAprenderComponent,
    LoginComponent,
    RegistrerComponent,
    TranslateComponent,
    ConversacionComponent,
    SpeakingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatProgressBarModule,
    MatDialogModule,
    AlertModule.forRoot(),
    NgbModule,
    MatSelectModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot( appStateReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
