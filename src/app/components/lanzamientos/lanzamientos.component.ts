import { Component, OnInit } from '@angular/core';

/*-----conectar servicio----*/
import { MarvelService, lanzamientos } from '../../servicios/marvel.service';


@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent implements OnInit {
  
  lanzamientos:lanzamientos[] = []

  unLanzamiento:any;

  /*--mostrar---*/
  mostrarLanzamientos = false;

  constructor(private conectarServicio: MarvelService) { }

  ngOnInit(): void {
    
    this.lanzamientos = this.conectarServicio.getLanzamientos();
    console.log( this.lanzamientos );

  }


  mostrarImagen( posicion:number ){

    this.mostrarLanzamientos = true;
    
    this.unLanzamiento = this.conectarServicio.getUnLanzamiento( posicion );
    //console.log(this.unLanzamiento)


  }

  cerrar_Lanzamientos(){
    this.mostrarLanzamientos = false;
  }

}
