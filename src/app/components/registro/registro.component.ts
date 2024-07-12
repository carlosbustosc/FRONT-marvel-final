import { Component, OnInit } from '@angular/core';

/*-----incluir formGroup---*/
import { FormGroup, FormBuilder, Validators } from "@angular/forms"


/*-------conectar servicios-------*/
import { MarvelService } from "../../servicios/marvel.service"







@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  formulario:FormGroup;

  constructor( private conectarServicio: MarvelService, private fb: FormBuilder ) {

    this.formulario = this.fb.group({

      nombre : [ "",  Validators.required ],
      email  : [ "",  Validators.required ],
      pass   : [ "",  Validators.required ],
      pass2  : [ "",  Validators.required ]

    })
  }
  
  /*---validacion visual---*/
  get nombreVacio(){

    return this.formulario.controls['nombre'].invalid && this.formulario.controls['nombre'].touched;
  }

  get correoVacio(){

    return this.formulario.controls['email'].invalid && this.formulario.controls['email'].touched;
  }

  get passVacio(){

    return this.formulario.controls['pass'].invalid && this.formulario.controls['pass'].touched;
  }

  get passVacio2(){
    
    var pass1 = this.formulario.controls['pass'].value;
    var pass2 = this.formulario.controls['pass2'].value;


    if( pass1 === pass2 ){

      return false;

    }else{

      return true;
    }

  }




  ngOnInit(): void {
  }




  enviarRegistro(){
    
    console.log( this.formulario );
    
    if(this.formulario.invalid){
        
      Object.values( this.formulario.controls ).forEach( valor => {
               
        valor.markAsTouched();

      })

    }else{

         this.conectarServicio.registrarUsuario( this.formulario )
                    .subscribe( resp => {

                      console.log( resp )

                      alert("SE HA REGISTRADO CORRECTAMENTE");

                      this.formulario.reset();
                      
                    }, (err => {

                         if(err.error.error.message == "EMAIL_EXISTS"){
                          alert("EL CORREO YA EXISTE");
                         }
                    })
                    )

    }

    



  }
  
}
