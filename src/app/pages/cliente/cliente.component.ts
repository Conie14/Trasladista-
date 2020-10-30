import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import{ClienteModel}from '../../models/cliente.model'
import Swal from'sweetalert2';
import{Observable}from'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: ClienteModel=new ClienteModel();

  constructor(private FirebaseServiceService: FirebaseServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo'){
      this.FirebaseServiceService.getCliente(id)
      .subscribe((resp:ClienteModel)=>{
        this.cliente=resp;
        this.cliente.id=id;
      });
    }

  }
  guardar(form:NgForm){
    if(form.invalid){
      console.log('Formulario fake')
      return;}

 //     Swal.fire({
 //      title:'ESPERME CRACK',
 //       text:'Guardado informacion',
 //       type:'info',
 //       allowOutsideClick:false

 //     });

      Swal.showLoading();

let peticion: Observable<any>;
    if(this.cliente.id){
      peticion=this.FirebaseServiceService.actualizarCliente(this.cliente);


    }else{
      peticion=this.FirebaseServiceService.crearCliente(this.cliente);

    }

    peticion.subscribe(resp=>{
      Swal.fire({
        title: this.cliente.nombre,
        text:'actualizacion correcta',

      });
    });






  }
}
