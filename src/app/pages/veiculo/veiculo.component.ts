import { Component, OnInit } from '@angular/core';
import{VeiculoModel}from '../../models/veiculo.model';
import{Observable}from'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from'sweetalert2';
import { NgForm } from '@angular/forms';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  veiculo: VeiculoModel=new VeiculoModel();


  constructor(private VeiculosService:VeiculosService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id');

    if(id !=='nuevo'){
      this.VeiculosService.getVeiculo(id)
      .subscribe((resp:VeiculoModel)=>{
        this.veiculo=resp;
        this.veiculo.id=id;
      });
    }

    }

    guardar(form:NgForm){
      if(form.invalid){
        console.log('Formulario fake')
        return;
      }

    Swal.fire({
      title:'Espere',
      text:'guardado',

      allowOutsideClick:false
    });

   Swal.showLoading();

   let peticion: Observable<any>;

      if(this.veiculo.id){
        peticion=this.VeiculosService.actualizarVeiculo(this.veiculo);
      }else{
        peticion=this.VeiculosService.crearVeiculo(this.veiculo);
      }

      peticion.subscribe(resp=>{
        Swal.fire({
          title: this.veiculo.marca,
          text:'Actualizacion correcta',

        });
      });

  }







}
