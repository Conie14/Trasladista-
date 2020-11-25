import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import{map}from 'rxjs/operators';
import { ServicioModel } from '../models/servicio.model';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url='https://trasladista-f5e9d.firebaseio.com';

  constructor(private http: HttpClient,private firestore:AngularFirestore ) { }

  crearServicio(servicio:ServicioModel){
    return this.http.post(`${this.url}/servicio.json`,servicio)
    .pipe(
      map((resp:any)=>{
        servicio.id=resp.name;
        return servicio;
      })
    );
    }
    actualizarServicio(servicio:ServicioModel){
      const servicioTemp={
        ...servicio
      };

      delete servicioTemp.id;

      return this.http.put(`${this.url}/servicio/${servicio.id}.json`,servicioTemp);
    }

    getServicio(id:string){
      return this.http.get(`${this.url}/servicio/${id}.json`);
    }

      getServicios(){
        return this.http.get(`${this.url}/servicio.json`)
        .pipe(
          map(resp=>this.crearAs(resp) )

        );
      }


      //borrarOperador(id:string){
     //   return this.http.delete(`${this.url}/operador/${id}.json`);
     // }

  private crearAs(serviciosObj:Object){

    const servicios:ServicioModel[]=[];
    console.log(serviciosObj);
    if(serviciosObj==null)
    {return[];}

    Object.keys(serviciosObj).forEach(key=>{

      const servicio:ServicioModel= serviciosObj[key];
      servicio.id=key;

      servicios.push(servicio);

    });

    return servicios;






  }





}
