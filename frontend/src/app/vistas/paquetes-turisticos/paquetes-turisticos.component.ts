import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-paquetes-turisticos',
  templateUrl: './paquetes-turisticos.component.html',
  styleUrls: ['./paquetes-turisticos.component.css']
})
export class PaquetesTuristicosComponent {

  data: any[] = [];
  data2: any[] = [];
  dataSofia: any[] = [];


  constructor (private apiService: ApiService) {}

  ngOnInit():void{
    this.llenarData()
    this.llenarData2()
    this.llenarDataSofia()
  }

  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data= data;
      console.log(this.data);
    })
  }

  llenarData2(){
    this.apiService.getDataVarios("3,4").subscribe( data => {
      this.data2= data;
    })
  }

  llenarDataSofia(){
    this.apiService.getDataVarios("5,6").subscribe( data => {
      this.dataSofia= data;
    })
  }

}
