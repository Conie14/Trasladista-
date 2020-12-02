import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListaModel } from '../models/lista.model';
import{map}from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListasService {

  private url='https://trasladista-f5e9d.firebaseio.com';

  constructor(private http: HttpClient , private firestore:AngularFirestore) { }

  crearLista(lista:ListaModel){
    return this.http.post(`${this.url}/lista_verificacion.json`,lista)
    .pipe(
      map((resp:any)=>{
        lista.id=resp.name;
        return lista;
      })
    );

    }

    actualizarLista(lista:ListaModel){
      const listaTemp={
        ...lista
      };

      delete listaTemp.id;

      return this.http.put(`${this.url}/lista_verificacion/${lista.id}.json`,listaTemp);
    }

    getLista(id:string){
      return this.http.get(`${this.url}/lista_verificacion/${id}.json`);
    }

      getListas(){
        return this.http.get(`${this.url}/lista_verificacion.json`)
        .pipe(
          map(resp=>this.crearAl(resp) )

        );
      }


      //borrarOperador(id:string){
     //   return this.http.delete(`${this.url}/operador/${id}.json`);
     // }

  private crearAl(listasObj:Object){

    const listas:ListaModel[]=[];
    console.log(listasObj);
    if(listasObj==null)
    {return[];}

    Object.keys(listasObj).forEach(key=>{

      const lista:ListaModel= listasObj[key];
      lista.id=key;

      listas.push(lista);

    });

    return listas;
  }






}
