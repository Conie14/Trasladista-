import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperadorModel } from '../models/operador.model';
import { AngularFirestore } from '@angular/fire/firestore';
import{map}from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OperadoresService {

  private url='https://trasladista-f5e9d.firebaseio.com';

  constructor(private http:HttpClient, private firestore:AngularFirestore) { }



  crearOperador(operador:OperadorModel){
    return this.http.post(`${this.url}/operador.json`,operador)
    .pipe(
      map((resp:any)=>{
        operador.id=resp.name;
        return operador;
      })
    );
  }

  actualizarOperador(operador:OperadorModel){
    const operadorTemp={
      ...operador
    };

    delete operadorTemp.id;

    return this.http.put(`${this.url}/operador/${operador.id}.json`,operadorTemp);
  }

  getOperador(id:string){
    return this.http.get(`${this.url}/operador/${id}.json`);
  }

    getOperadores(){
      return this.http.get(`${this.url}/operador.json`)
      .pipe(
        map(resp=>this.crearAo(resp) )

      );
    }


    borrarOperador(id:string){
      return this.http.delete(`${this.url}/operador/${id}.json`);
    }

private crearAo(operadoresObj:Object){

  const operadores:OperadorModel[]=[];
  console.log(operadoresObj);
  if(operadoresObj==null)
  {return[];}

  Object.keys(operadoresObj).forEach(key=>{

    const operador:OperadorModel= operadoresObj[key];
    operador.id=key;

    operadores.push(operador);

  });

  return operadores;

  }
}
