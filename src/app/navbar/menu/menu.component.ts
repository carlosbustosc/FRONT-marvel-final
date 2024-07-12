import { Component, OnInit } from '@angular/core';

import { MarvelService } from "../../servicios/marvel.service"  

/*----usar ruta ---*/
import { Router } from "@angular/router"

declare var $: any;


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {


  constructor( private conectarServicio: MarvelService, private usarRuta: Router ) { }
  
  

  ngOnInit(): void {
   
    /*
    if( localStorage.getItem('token') ){
      
      
    $(".ocultar_menu").css('display', 'block');
      
    
    }else{

      $(".ocultar_menu").css('display', 'none');
      
    }


    //---mobile---
    if( localStorage.getItem('token') ){
      
      if( $(window).width() < 600 ){

        $(".menu_btn ").css('display', 'block');

      }
        
    }else{

      $(".menu_btn ").css('display', 'none');
    }
  
    */
       
        
      
    








    var num = 0;
    $(".menu_btn").click( function(){
        
      if(num == 0){
        $(".conetenedor_menu_marvel").animate({left: `0px`});
        num = 1;
        
      }else{
        num = 0;
        $(".conetenedor_menu_marvel").animate({left: '-100%'}); 
      }

    })


    $(".botones_ltsx").click(function(){
        
      $(".conetenedor_menu_marvel").animate({left: '-100%'});
      num = 0;

    })

  

    

   
  }


  cerrarSesion(){
   
    this.conectarServicio.borrarToken();
    this.usarRuta.navigate([ 'login' ]);
    $(".ocultar_menu, .menu_btn").css('display', 'none');
  }


   
    
    


  

}
