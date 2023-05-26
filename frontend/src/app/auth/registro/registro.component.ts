import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm=this.formBuilder.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    surname:['', [Validators.required, Validators.minLength(2)]],
    date:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })
  
  constructor(private formBuilder:FormBuilder, private router:Router) { }
  
  ngOnInit(): void {
     
  }

  get name(){
    return this.registroForm.controls.name;
  }

  get surname(){
    return this.registroForm.controls.surname;
  }

  get date(){
    return this.registroForm.controls.date;
  }

  get email(){
    return this.registroForm.controls.email;
  }

  get password(){
    return this.registroForm.controls.password;
  }

  registro() {
    if(this.registroForm.valid){
      console.log("ingresar");
      this.router.navigateByUrl('/home');
      this.registroForm.reset();
    }
    else{
      this.registroForm.markAllAsTouched();
      alert("No se puede ingresar");
    }


  }

}

