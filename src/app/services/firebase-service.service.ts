import { Component, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import{HttpClient}from '@angular/common/http';
import{map}from 'rxjs/operators';
import{ClienteModel}from '../models/cliente.model'


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  private url='https://trasladista-f5e9d.firebaseio.com';

  constructor(
    private http:HttpClient,
    private firestore:AngularFirestore
  ) {}



    crearCliente(cliente:ClienteModel){
      return this.http.post(`${this.url}/clientes.json`,cliente)
      .pipe(
        map((resp:any)=>{
          cliente.id=resp.name;
          return cliente;
        })
      );
    }

    actualizarCliente(cliente:ClienteModel){
      const clienteTemp={
        ...cliente
      };

      delete clienteTemp.id;

      return this.http.put(`${this.url}/clientes/${cliente.id}.json`,clienteTemp);
    }

    getCliente(id:string){
      return this.http.get(`${this.url}/clientes/${id}.json`);
    }

      getClientes(){
        return this.http.get(`${this.url}/clientes.json`)
        .pipe(
          map(resp=>this.crearAc(resp) )

        );
      }


      borrarCliente(id:string){
        return this.http.delete(`${this.url}/clientes/${id}.json`);
      }

  private crearAc(clientesObj:Object){

    const clientes:ClienteModel[]=[];
    console.log(clientesObj);
    if(clientesObj==null)
    {return[];}

    Object.keys(clientesObj).forEach(key=>{

      const cliente:ClienteModel= clientesObj[key];
      cliente.id=key;

      clientes.push(cliente);

    });

    return clientes;

  }





}
