import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnglishComponent } from './english/english.component';
import { MatTabsModule } from '@angular/material';
import { PresentService } from './english/service/verb/present/present.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SettingEnglishService } from './english/service/setting/settingenglish.service';
import {MatButtonModule} from '@angular/material/button';
import { PresentExampleService } from './english/service/verb/present/present-example.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './english/menu/menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnglishComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule
  ],
  providers: [PresentService, SettingEnglishService, PresentExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
