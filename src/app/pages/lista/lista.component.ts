import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import {ListaModel} from '../../models/lista.model'
import Swal from'sweetalert2';
import{Observable}from'rxjs';
import { ActivatedRoute } from '@angular/router';
import{ListasService} from'src/app/services/listas.service';
import{ AngularFireStorage}from '@angular/fire/storage';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: ListaModel= new ListaModel();

  constructor(private ListasService:ListasService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo'){
      this.ListasService.getLista(id)
      .subscribe((resp:ListaModel)=>{
        this.lista=resp;
        this.lista.id=id;
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
    if(this.lista.id){
      peticion=this.ListasService.actualizarLista(this.lista);


    }else{
      peticion=this.ListasService.crearLista(this.lista);

    }

    peticion.subscribe(resp=>{
      Swal.fire({
        title: this.lista.id,
        text:'actualizacion correcta',

      });
    });






  }



}
