import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnglishComponent } from './english/english.component';
import { MatTabsModule } from '@angular/material';
import { PresentService } from './english/service/verb/present/present.service';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    EnglishComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [PresentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
