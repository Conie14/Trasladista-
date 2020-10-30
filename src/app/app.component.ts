import { Component,OnInit } from '@angular/core';

import { FirebaseServiceService } from './services/firebase-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'trasladista';
  config: any;
  collection = { count: 10, data: [] }
//cliente:ClientesComponent=new ClientesComponent();

  constructor(private FirebaseServiceService:FirebaseServiceService){}

  ngOnInit(): void {


    for(var i=0; i<this.collection.count; i++){
      this.collection.data.push({
        id: i,
        nombre:"nombre"+i,
        apellidop:"apellido p"+i,
        apellidom:"apellido m"+i,
        correo:"correo"+i,
        telefono:10 +i,
        rfc:"rfc1256"+i,

      })
    }


    //configuracion para la paginación
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
  };
}
pageChanged(event) {
  this.config.currentPage = event;

  //this.FirebaseServiceService.crearCliente(this.cliente).subscribe(resp=>{console.log(resp);});
}








}
