import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-paquetes-turisticos',
  templateUrl: './paquetes-turisticos.component.html',
  styleUrls: ['./paquetes-turisticos.component.css']
})
export class PaquetesTuristicosComponent implements OnInit {
  products: any[] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}




