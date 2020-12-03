import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViaticoModel } from '../models/viatico.model';
import { AngularFirestore } from '@angular/fire/firestore';
import{map}from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViaticosService {

  private url='https://trasladista-f5e9d.firebaseio.com';

  constructor(private http:HttpClient,private firestore:AngularFirestore) { }

  crearViatico(viatico:ViaticoModel){
    return this.http.post(`${this.url}/viatico.json`,viatico)
    .pipe(
      map((resp:any)=>{
        viatico.id=resp.name;
        return viatico;
      })
    );
  }


  actualizarViatico(viatico:ViaticoModel){
    const viaticoTemp={
      ...viatico
    };

    delete viaticoTemp.id;

    return this.http.put(`${this.url}/viatico/${viatico.id}.json`,viaticoTemp);
  }

  getViatico(id:string){
    return this.http.get(`${this.url}/viatico/${id}.json`);
  }

    getViaticos(){
      return this.http.get(`${this.url}/viatico.json`)
      .pipe(
        map(resp=>this.crearAv(resp) )

      );
    }


    private crearAv(viaticosObj:Object){

      const viaticos:ViaticoModel[]=[];
      console.log(viaticosObj);
      if(viaticosObj==null)
      {return[];}

      Object.keys(viaticosObj).forEach(key=>{

        const viatico:ViaticoModel= viaticosObj[key];
        viatico.id=key;

        viaticos.push(viatico);

      });

      return viaticos;

      }



}
