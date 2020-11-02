import { Component, OnInit } from '@angular/core';
import { OperadorModel } from 'src/app/models/operador.model';
import { OperadoresService } from 'src/app/services/operadores.service';
@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent implements OnInit {

  operadores: OperadorModel[]=[];

  constructor(private OperadoresService:OperadoresService) { }

  ngOnInit(): void {

    this.OperadoresService.getOperadores()
    .subscribe(resp=>{
      console.log(resp);
      this.operadores=resp;
    });
  }

  borrarOperador(operador:OperadorModel){

    this.OperadoresService.borrarOperador(operador.id).subscribe();
  }

}
