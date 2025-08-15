import { Component, OnInit } from '@angular/core';

/*---CONECTAR CON SERVICIOS----*/
import { MarvelService } from '../../servicios/marvel.service';


/*----usar ruta para enviar parametro---*/
import { Router } from "@angular/router"



@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  
  /*---selects--*/
  combo1 = "comic";
  combo2 = "&hasDigitalIssue=true";
  /*---selects--*/

  /*---mostrar ocultar tarjetas--*/
  mostrarComics      = true;
  mostrarCargaSelect = false;
  MostrarInfo        = false;
  /*---mostrar ocultar tarjetas--*/
  

    /*----arreglos de almacenamiento data---*/
    Comics:any[] = [];
    CargaSelect:any[] = [];
    /*----arreglos de almacenamiento data---*/

  constructor( private usarRuta: Router, private conectarServicio: MarvelService ) { }

  ngOnInit(): void {
    

    /*---llamado de todos los comics----*/
    this.conectarServicio.getComics()
        .subscribe( (resp:any) => {
          console.log( resp.data.results );

          this.Comics = resp.data.results;
       
        } )

  }


  enviarParametro(id:number){
        
    //console.log( id );
    this.usarRuta.navigate( ['/detalleComic', id] );
  }


/*------------------select----------------*/
categoriaSeleccionada(){
  
  console.log(this.combo1);
  console.log(this.combo2);

  this.mostrarComics = false;

  this.conectarServicio.getSelectComics( this.combo1, this.combo2 )
      .subscribe( resp => {
      
        console.log(resp);
        
        this.CargaSelect = resp;

        if(resp.length <= 0){
            
          this.MostrarInfo = true;

        }else{

          this.MostrarInfo = false;
        }
        
        this.mostrarCargaSelect = true;

      })
                       

}


}
