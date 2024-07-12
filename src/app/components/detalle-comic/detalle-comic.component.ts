import { Component, OnInit } from '@angular/core';

/*----recibir parametro----*/
import { ActivatedRoute, Router } from "@angular/router"

/*----conectar servicio----*/
import { MarvelService } from "../../servicios/marvel.service" 

/*---localicacion--*/
import { Location } from "@angular/common"



@Component({
  selector: 'app-detalle-comic',
  templateUrl: './detalle-comic.component.html',
  styleUrls: ['./detalle-comic.component.css']
})
export class DetalleComicComponent implements OnInit {
  
  detalleComic:any = {}

  caracteres  : any;
  creadores   : any;
  description : any;

  cerrarImagen = false;

  /*----mostrar caracteres---*/
  mostrarCaracteres  = true;
  mostrarCreadores   = true;
  mostrarDescripcion = true;

  constructor(private ubicacion:  Location, 
              private usarRouter: Router, 
              private recibirParametro: ActivatedRoute, 
              private conectarServicio: MarvelService  ) { }

  ngOnInit(): void {
  
    this.recibirParametro.params.subscribe( parametro => {
      console.log(parametro['id']);

      this.conectarDetalle( parametro['id'] );

    })

  }

  conectarDetalle( param:number ){
        
    this.conectarServicio.getDetalleComic( param )
        .subscribe( (resp:any) => {
          console.log(resp);

          this.detalleComic = resp;

          this.caracteres  = resp.data.results[0].characters.items
          this.creadores   = resp.data.results[0].creators.items
          this.description = resp.data.results[0].description


          /*---caracteres---*/
          if( this.caracteres.length <= 0 ){
            this.mostrarCaracteres = false;
          }

          /*---creadores---*/
          if( this.creadores.length <= 0 ){
               this.mostrarCreadores = false;
          }

          /*--descripción---*/
          if( this.description == null ){
              this.mostrarDescripcion = false;
          }

        })

  }


  volver(){
  
      this.ubicacion.back();

  }



  abrir_imagen(){
    this.cerrarImagen = true;
  }

  cerrar_imagen(){
    this.cerrarImagen = false;
  } 
}
