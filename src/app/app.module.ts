import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
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
import { AlertModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PresentVerbComponent,
    PrincipalComponent,
    PresentVerbAprenderComponent,
    LoginComponent,
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
