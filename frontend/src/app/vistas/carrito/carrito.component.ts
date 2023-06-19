import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: any[] = [];
 

  constructor(private apiService: ApiService, private router: Router ) {
    this.productos = this.apiService.getCart();
  }

  vaciarCarrito() {
    this.apiService.clearCart();
    // Puedes mostrar una notificación o mensaje al usuario de que el carrito se ha vaciado.
    
  }

  agregarAlCarrito(producto: any, cantidad: number) {
    console.log(producto); // Verificar el contenido del objeto producto
    const productoEnCarrito = {
      producto: producto.idproducto, // Utiliza producto.productoId en lugar de producto.idproducto
      cantidad: cantidad
    };
  
    this.apiService.addToCart(productoEnCarrito);
  }



  comprar() {
    if (this.productos.length === 0) {
      return;
    }
  
    const cantidadTotal = this.productos.reduce((total, producto) => total + producto.cantidad, 0);
  
    this.apiService.simularCompra(this.productos[0].idproducto, cantidadTotal).subscribe(
      (respuesta: any) => {
        console.log(respuesta); // Muestra la confirmación de compra en la consola
        // Aquí puedes realizar las acciones que desees con la respuesta de la confirmación
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}  

















