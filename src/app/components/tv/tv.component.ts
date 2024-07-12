import { Component, OnInit } from '@angular/core';

/*---conectar servicio-----*/
import { MarvelService } from '../../servicios/marvel.service';

/*---sanar Dom url---*/
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  /*--todas la series--*/
  todasSeries:any[] = [];


  /*---grupo--*/
  grupoUnaSerie:any;


  /*---url---*/
  sanarUrl:any;


  /*--mostrar video---*/
  mostrarSerie = false;


  constructor( private sanarDom: DomSanitizer, private conectarServicio: MarvelService ) { }

  ngOnInit(): void {

    this.todasSeries = this.conectarServicio.getSeriesTv();
    console.log( this.todasSeries);
    
  }





  mostrarVideo( posicion:string, termino:string, i:number ){
    this.mostrarSerie = true;
    console.log(posicion, termino, i)

    this.grupoUnaSerie = this.conectarServicio.getUnaSerie( posicion, termino, i );
    this.sanarUrl = this.sanarDom.bypassSecurityTrustResourceUrl(  this.grupoUnaSerie.video );

  
  }


  ocultarVideo(){
    this.mostrarSerie = false;
  }

}
