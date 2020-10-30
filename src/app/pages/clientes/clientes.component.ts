import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ClienteModel[]=[];

  constructor(private FirebaseServiceService: FirebaseServiceService) { }

  ngOnInit(): void {

    this.FirebaseServiceService.getClientes()
    .subscribe(resp=>{
      console.log(resp);
      this.clientes=resp;
    });
  }

  borrarCliente(cliente:ClienteModel){

    this.FirebaseServiceService.borrarCliente(cliente.id).subscribe();
  }


}
