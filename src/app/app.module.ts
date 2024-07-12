import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


/*---usar http----*/
import { HttpClientModule } from "@angular/common/http"


/*---usar formulario por template---*/
import {  ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms"



/*---componentes---*/
import { AppComponent } from './app.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';
import { DetalleComicComponent } from './components/detalle-comic/detalle-comic.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';
import { TvComponent } from './components/tv/tv.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    SeriesComponent,
    DetalleComicComponent,
    MenuComponent,
    DetalleSerieComponent,
    HomeComponent,
    FooterComponent,
    JuegosComponent,
    PeliculasComponent,
    LanzamientosComponent,
    TvComponent,
    RegistroComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
