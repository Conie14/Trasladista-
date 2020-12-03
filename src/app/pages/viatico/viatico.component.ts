import { Component, OnInit } from '@angular/core';
import{ViaticoModel}from '../../models/viatico.model';
import{Observable}from'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from'sweetalert2';
import { NgForm } from '@angular/forms';
import { ViaticosService } from 'src/app/services/viaticos.service';


@Component({
  selector: 'app-viatico',
  templateUrl: './viatico.component.html',
  styleUrls: ['./viatico.component.css']
})
export class ViaticoComponent implements OnInit {

  viatico:ViaticoModel= new ViaticoModel();

  constructor(private ViaticosService:ViaticosService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo'){
      this.ViaticosService.getViatico(id)
      .subscribe((resp:ViaticoModel)=>{
        this.viatico=resp;
        this.viatico.id=id;
      });
    }
  }

  guardar(form:NgForm){
    if(form.invalid){
      console.log('Formulario fake')
      return;
    }

     //     Swal.fire({
 //      title:'ESPERME CRACK',
 //       text:'Guardado informacion',
 //       type:'info',
 //       allowOutsideClick:false

 //     });

 Swal.showLoading();

 let peticion: Observable<any>;

    if(this.viatico.id){
      peticion=this.ViaticosService.actualizarViatico(this.viatico);
    }else{
      peticion=this.ViaticosService.crearViatico(this.viatico);
    }

    peticion.subscribe(resp=>{
      Swal.fire({
        title: this.viatico.nombre,
        text:'actualizacion correcta',

      });
    });


  }





}
