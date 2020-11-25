import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ServicioModel}from '../../models/servicio.model';
import{Observable}from'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from'sweetalert2';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  servicio: ServicioModel=new ServicioModel();


  constructor(private serviciosService:ServiciosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id');

    if(id !=='nuevo'){
      this.serviciosService.getServicio(id)
        .subscribe((reso: ServicioModel)=>{
          this.servicio=reso;
          this.servicio.id=id;

        })

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

      if(this.servicio.id){
        peticion=this.serviciosService.actualizarServicio(this.servicio);
     }else{
        peticion=this.serviciosService.crearServicio(this.servicio);
      }

      peticion.subscribe(resp=>{
        Swal.fire({
          text:'Todo esta correcta Se enviara a',
          title: this.servicio.lugar_destino,

        });
      });

  }





}
