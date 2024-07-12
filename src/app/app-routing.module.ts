import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*-----importar componentes-----*/
import { ComicsComponent } from './components/comics/comics.component';
import { DetalleComicComponent } from './components/detalle-comic/detalle-comic.component'
import { SeriesComponent } from './components/series/series.component'
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component'
import { HomeComponent } from './components/home/home.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';
import { TvComponent } from './components/tv/tv.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component'


import { MarvelGuard } from './guard/marvel.guard';


const routes: Routes = [
    
    { path: "home",               component:  HomeComponent           }, // canActivate: [ MarvelGuard ]
    { path: "comics",             component:  ComicsComponent         },//canActivate: [ MarvelGuard ]
    { path: "series",             component:  SeriesComponent         }, //canActivate: [ MarvelGuard ]
    { path: "lanzamientos",      component:  LanzamientosComponent    },//canActivate: [ MarvelGuard ]
    { path: "juegos",             component:  JuegosComponent         },//canActivate: [ MarvelGuard ]
    { path: "peliculas",         component:  PeliculasComponent       },//canActivate: [ MarvelGuard ]
    { path: "tv",                component:  TvComponent              },//canActivate: [ MarvelGuard ]
    { path: "detalleComic/:id",   component:  DetalleComicComponent   },//canActivate: [ MarvelGuard ]
    { path: "detalleSerie/:id",   component:  DetalleSerieComponent   },//canActivate: [ MarvelGuard ]
    { path: "registro",          component:  RegistroComponent        },//canActivate: [ MarvelGuard ]
    { path: "login",             component:  LoginComponent           },//canActivate: [ MarvelGuard ]
    
    { path: "", pathMatch: "full", redirectTo:"/home" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
