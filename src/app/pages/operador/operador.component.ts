import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{OperadorModel}from '../../models/operador.model';
import { OperadoresService } from 'src/app/services/operadores.service';
import{Observable}from'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from'sweetalert2';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent implements OnInit {


  operador: OperadorModel=new OperadorModel();

  constructor(private OperadoresService:OperadoresService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo'){
      this.OperadoresService.getOperador(id)
      .subscribe((resp:OperadorModel)=>{
        this.operador=resp;
        this.operador.id=id;
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

    if(this.operador.id){
      peticion=this.OperadoresService.actualizarOperador(this.operador);
    }else{
      peticion=this.OperadoresService.crearOperador(this.operador);
    }

    peticion.subscribe(resp=>{
      Swal.fire({
        title: this.operador.nombre,
        text:'actualizacion correcta',

      });
    });






  }











}
