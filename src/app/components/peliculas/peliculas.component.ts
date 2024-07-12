import { Component, OnInit } from '@angular/core';


/*-------conectar servicios-------*/
import { MarvelService, movies } from '../../servicios/marvel.service';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  
  todasPeliculas:movies[] = []
  
  UnaPelicula:any;
  sanarIframe:any = ""

  /*-----mostrar-----*/
  mostrarPeliculas = false;

  constructor(private sanarDom: DomSanitizer, private conectarServicio: MarvelService ) { }

  ngOnInit(): void {

    this.todasPeliculas = this.conectarServicio.getPeliculas();
    console.log( this.todasPeliculas );

  }



  mostrarVideo( numero:number ){
    this.mostrarPeliculas = true;


    this.UnaPelicula = this.conectarServicio.getUnaPelicula( numero );
    //console.log( this.iframePelicula.video );

    this.sanarIframe = this.sanarDom.bypassSecurityTrustResourceUrl( this.UnaPelicula.video );
  
  }

  cerrar_peliculas(){

    this.mostrarPeliculas = false;
  }

}
