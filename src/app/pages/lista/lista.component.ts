import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import {ListaModel} from '../../models/lista.model'
import Swal from'sweetalert2';
import{Observable}from'rxjs';
import { ActivatedRoute } from '@angular/router';
import{ListasService} from'src/app/services/listas.service';
import{ AngularFireStorage}from '@angular/fire/storage';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import{finalize}from '../../../../node_modules/rxjs/operators'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: ListaModel= new ListaModel();

  constructor(private ListasService:ListasService,private route:ActivatedRoute, private storage:AngularFireStorage) { }
  @ViewChild('imgx')inputimgx:ElementRef;
  uploadPercent:Observable<number>;
  urlImage:Observable<string>;

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

  onUpload(e){
    //console.log('subir',e.target.files[0]);
    const id =Math.random().toString(36).substring(2);
    const file=e.target.files[0];
    const filePath=`upload/profile_${id}`;
    const ref=this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file);
    this.uploadPercent=task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=>this.urlImage=ref.getDownloadURL())).subscribe();


  }

}
