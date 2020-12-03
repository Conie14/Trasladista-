import { Component, OnInit } from '@angular/core';
import { ViaticoModel } from 'src/app/models/viatico.model';
import { ViaticosService } from 'src/app/services/viaticos.service';

@Component({
  selector: 'app-viaticos',
  templateUrl: './viaticos.component.html',
  styleUrls: ['./viaticos.component.css']
})
export class ViaticosComponent implements OnInit {
  viaticos: ViaticoModel[]=[];


  constructor(private ViaticosService:ViaticosService) { }

  ngOnInit(): void {

    this.ViaticosService.getViaticos()
    .subscribe(resp=>{
      console.log(resp);
      this.viaticos=resp;
    });

  }

}
