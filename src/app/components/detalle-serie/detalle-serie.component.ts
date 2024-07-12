import { Component, OnInit } from '@angular/core';


/*---recibir parametro---*/
import { ActivatedRoute } from "@angular/router";


/*-----conectar servicio----------*/
import { MarvelService } from "../../servicios/marvel.service" 


/*---usar localizacion pa volver---*/
import { Location } from "@angular/common"



@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrls: ['./detalle-serie.component.css']
})
export class DetalleSerieComponent implements OnInit {

  cargarDetalleSerie:any = {};

  constructor(private localizacion:Location, private recibirParametro:ActivatedRoute, private conectarServicio: MarvelService ) { }

  ngOnInit(): void {

    this.recibirParametro.params.subscribe( resp => {
      console.log( resp['id'] );

      this.conectarDetalle( resp['id'] )

    })  
  }


  conectarDetalle( id:number ){

    this.conectarServicio.getDetalleSerie( id )
       .subscribe( resp => {
        console.log( resp );

        this.cargarDetalleSerie = resp;

       })
  }


  volverSeries(){
     
    this.localizacion.back();

  }

}
