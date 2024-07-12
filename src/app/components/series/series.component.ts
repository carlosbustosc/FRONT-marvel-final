import { Component, OnInit } from '@angular/core';

/*---conectar servicio-------*/
import { MarvelService } from "../../servicios/marvel.service"

/*----usar ruta----*/
import { Router } from "@angular/router";



@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesMarvel:any[] = [];
  seriesComboSelect:any[] = [];

  mostrarSeries       = true;
  mostrarSeriesCombo  = false;

  constructor( private usarRuta:Router, private conectarServicio:MarvelService ) { }

  ngOnInit(): void {
  
      this.conectarServicio.getSeries()
          .subscribe( resp => {
            console.log( resp );
          
            this.seriesMarvel = resp;
        
          })

  }

  verSeries( id:number ){
      
    this.usarRuta.navigate( ['/detalleSerie', id ] )
    console.log(id);
  }

  seleccionarTipoSerie( parametro:any ){
       

    this.mostrarSeries = false;

    console.log( parametro.target.value );
    this.conectarServicio.getSeriesCombo( parametro.target.value )
                  .subscribe( resp => {
                    console.log( resp );

                    this.seriesComboSelect = resp;
                    this.mostrarSeriesCombo  = true;
                  } )
  }

}
