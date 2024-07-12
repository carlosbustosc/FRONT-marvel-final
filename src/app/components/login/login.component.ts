import { Component, OnInit } from '@angular/core';

/*---importar tipo formGroup---*/
import { FormGroup, FormBuilder, Validators } from "@angular/forms"

/*---conectar servicio----*/
import { MarvelService } from '../../servicios/marvel.service' 

/*-----usar router------*/
import { Router } from "@angular/router"

declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formularioLogin: FormGroup

  constructor(private usarRuta:Router, private fb: FormBuilder, private conectarServicio: MarvelService ) { 
    
    this.formularioLogin = this.fb.group({
      emailLogin : ["", Validators.required ],
      passLogin  : ["", Validators.required ]
    })
  }


  /*---validacion visual---*/
  get emailVacio(){
    
    return this.formularioLogin.controls['emailLogin'].invalid && this.formularioLogin.controls['emailLogin'].touched;

  }

  get passVacio(){
    
    return this.formularioLogin.controls['passLogin'].invalid && this.formularioLogin.controls['passLogin'].touched;
  
  }

  

  ngOnInit(): void {
  }

  login(){
    console.log(this.formularioLogin);

    if( this.formularioLogin.invalid ){

      Object.values( this.formularioLogin.controls ).forEach( valor => {
        valor.markAsTouched();
      })

    }else{
        
        this.conectarServicio.loginUsuario( this.formularioLogin )
            .subscribe( resp => {

              this.usarRuta.navigate( ['/home'] );
              console.log( resp )

              $(".ocultar_menu").css('display', 'block');
              
              if( $(window).width() > 600 ){
                $(".menu_btn ").css('display', 'none');
              }else{
                $(".menu_btn ").css('display', 'block');
              }
              

            }, (err) => {
                  
              if(err.error.error.message == "EMAIL_NOT_FOUND"){
                alert("EL CORREO NO EXISTE")
              } 
              
              if(err.error.error.message == "INVALID_PASSWORD"){
                alert( "LA CONTRASEÑA NO ES VALIDA ")
              }
            })

    }
  }

}
