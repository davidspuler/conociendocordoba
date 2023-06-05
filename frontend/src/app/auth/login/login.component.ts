import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private formBuilder:FormBuilder, private router:Router, private ApiService:ApiService) { }
  
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  get email(){
    return this.loginForm.controls['email'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }

  login() {
    // if(this.loginForm.valid){
    //   console.log("ingresar");
    //   this.router.navigateByUrl('/home');
    //   this.loginForm.reset();
    // }
    // else{
    //   this.loginForm.markAllAsTouched();
    //   alert("No se puede ingresar");
    // }
    const valores = this.loginForm.value
    this.ApiService.login(valores.email, valores.password).subscribe(res => {
      let error: boolean = false
      console.log(res.usuario)
      if (res.message == "success") {
        alert("Se ha logueado correctamente")
        // this.router.navigateByUrl('/login');
        // this.loginForm.reset();
      }
      else {
        this.loginForm.markAllAsTouched();
        alert(res.message);
      }
    })

  }

}
