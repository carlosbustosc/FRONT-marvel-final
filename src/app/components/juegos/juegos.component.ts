import { Component, OnInit } from '@angular/core';

/*----conectar servicio----*/
import { MarvelService, juegos } from '../../servicios/marvel.service';

/*---- desinfectar Dom---*/
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})

export class JuegosComponent implements OnInit {
  
  juegos:juegos[] = [];

  juegoPosicion:any; /*--recibe objeto--*/
  sanarVideo:any/*--recibe string de video de ese objeto--*/




  /*---mostrar / ocultar---*/
  mostrar_videos = false;


  constructor(private desinfectar: DomSanitizer, private conectarServicio:MarvelService ) { }

  ngOnInit(): void {

    this.juegos = this.conectarServicio.getJuegos();
    
  }
  

 

  mostrarVideo( numeroPosicion:number ){

    this.mostrar_videos = true;

    this.juegoPosicion = this.conectarServicio.getUnJuego( numeroPosicion ); /*---recibo el objeto--*/
    this.sanarVideo = this.desinfectar.bypassSecurityTrustResourceUrl( this.juegoPosicion.video );/*---le paso solo el string video--*/

  }



  cerrar_video(){

    this.mostrar_videos = false;
  }

}
