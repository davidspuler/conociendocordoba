import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paquetes-turisticos',
  templateUrl: './paquetes-turisticos.component.html',
  styleUrls: ['./paquetes-turisticos.component.css']
})
export class PaquetesTuristicosComponent implements OnInit {
  productos: any[] = [];

  constructor(private ApiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.ApiService.getProducts().subscribe(data => {
      this.productos = data;
    });
  }


  agregarAlCarrito(producto: any) {
    this.ApiService.addToCart(producto);
  // Puedes mostrar una notificación o mensaje al usuario de que el producto se ha agregado al carrito.
  this.router.navigate(['/carrito']);
  }
}



