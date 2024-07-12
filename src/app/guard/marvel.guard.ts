import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


/*-----conectar servicio-----*/
import { MarvelService } from '../servicios/marvel.service';

/*---usar ruta---*/
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class MarvelGuard implements CanActivate {

  constructor( private usarRuta:Router,  private conectarServicio: MarvelService ){}

  canActivate() {
    
   if( this.conectarServicio.autenticarGuard() ){
    return true;

   }else{
    
    this.usarRuta.navigate( ['/login'] );
    return false;
   
  }
  
  }
  
}
