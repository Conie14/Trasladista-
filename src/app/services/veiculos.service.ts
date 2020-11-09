import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VeiculoModel } from '../models/veiculo.model';
import { AngularFirestore } from '@angular/fire/firestore';
import{map}from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private url='https://trasladista-f5e9d.firebaseio.com';

  constructor(private http:HttpClient,private firestore:AngularFirestore ) { }

  crearVeiculo(veiculo:VeiculoModel){
    return this.http.post(`${this.url}/veiculo.json`,veiculo)
    .pipe(
      map((resp:any)=>{
        veiculo.id=resp.name;
        return veiculo;
      })
    );
  }


  actualizarVeiculo(veiculo:VeiculoModel){
    const veiculoTemp={
      ...veiculo
    };

    delete veiculoTemp.id;

    return this.http.put(`${this.url}/veiculo/${veiculo.id}.json`,veiculoTemp);
  }

  getVeiculo(id:string){
    return this.http.get(`${this.url}/veiculo/${id}.json`);
  }

    getVeiculos(){
      return this.http.get(`${this.url}/veiculo.json`)
      .pipe(
        map(resp=>this.crearAv(resp) )

      );
    }


    private crearAv(veiculosObj:Object){

      const veiculos:VeiculoModel[]=[];
      console.log(veiculosObj);
      if(veiculosObj==null)
      {return[];}

      Object.keys(veiculosObj).forEach(key=>{

        const veiculo:VeiculoModel= veiculosObj[key];
        veiculo.id=key;

        veiculos.push(veiculo);

      });

      return veiculos;

      }


}
