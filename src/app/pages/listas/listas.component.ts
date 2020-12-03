import { Component, OnInit } from '@angular/core';
import { ListaModel } from 'src/app/models/lista.model';
import{ListasService} from'src/app/services/listas.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  listas:ListaModel[]=[];

  constructor(private ListasService: ListasService) { }

  ngOnInit(): void {
    this.ListasService.getListas()
    .subscribe(resp=>{
      console.log(resp);
      this.listas=resp;
    });
  }



}
