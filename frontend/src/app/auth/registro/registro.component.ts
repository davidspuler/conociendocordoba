import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    date: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
 
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private ApiService:ApiService) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  get name() {
    return this.registroForm.controls['name'];
  }

  get surname() {
    return this.registroForm.controls['surname'];
  }

  get date() {
    return this.registroForm.controls['date'];
  }

  get email() {
    return this.registroForm.controls['email'];
  }

  get password() {
    return this.registroForm.controls['password'];
  }

  registro() {
    const valores = this.registroForm.value
    this.ApiService.createUsuario(valores.name, valores.surname, valores.date, valores.email, valores.password).subscribe(res => {
      let error: boolean = false
      if (res.message == "Success") {
        alert("Se ha registrado correctamente, Bienvenido")
        this.router.navigateByUrl('/login');
        this.registroForm.reset();
      }
      else {
        this.registroForm.markAllAsTouched();
        alert("No se puede ingresar");
      }
    })
  }

}

