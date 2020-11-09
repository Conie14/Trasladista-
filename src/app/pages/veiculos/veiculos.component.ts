import { Component, OnInit } from '@angular/core';
import { VeiculosService } from 'src/app/services/veiculos.service';
import{VeiculoModel}from '../../models/veiculo.model';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  veiculos: VeiculoModel[]=[];

  constructor(private VeiculosService:VeiculosService) { }

  ngOnInit(): void {
    this.VeiculosService.getVeiculos()
    .subscribe(resp=>{
      console.log(resp);
      this.veiculos=resp;
    });
  }



}
