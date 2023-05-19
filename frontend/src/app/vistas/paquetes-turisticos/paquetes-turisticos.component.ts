import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-paquetes-turisticos',
  templateUrl: './paquetes-turisticos.component.html',
  styleUrls: ['./paquetes-turisticos.component.css']
})
export class PaquetesTuristicosComponent {

  data: any[] = [];

  constructor (private apiService: ApiService) {}

  ngOnInit():void{
    this.llenarData()
  }

  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data= data;
      console.log(this.data);
    })
  }

}
