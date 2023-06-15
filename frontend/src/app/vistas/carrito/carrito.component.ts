import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: any[];

  constructor(private apiService: ApiService, private router: Router ) {
    this.productos = this.apiService.getCart();
  }

  vaciarCarrito() {
    this.apiService.clearCart();
    // Puedes mostrar una notificación o mensaje al usuario de que el carrito se ha vaciado.
    
  }
}
