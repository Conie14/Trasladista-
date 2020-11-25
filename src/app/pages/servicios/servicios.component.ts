import { Component, OnInit } from '@angular/core';
import{ServiciosService}from'../../services/servicios.service'

import { from } from 'rxjs';
import { ServicioModel } from 'src/app/models/servicio.model';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {


  servicios: ServicioModel[]=[];

  constructor(private ServiciosService:ServiciosService) { }

  ngOnInit(): void {
    this.ServiciosService.getServicios()
    .subscribe(resp=>{
      console.log(resp);
      this.servicios=resp;
    });
  }

}
