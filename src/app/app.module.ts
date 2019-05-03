import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.route';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Modulos

import { PagesModule } from './pages/pages.module';

// Servicios
import { ServiceModule } from './services/service.module';

//Temporales

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    CommonModule,
    ServiceModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
