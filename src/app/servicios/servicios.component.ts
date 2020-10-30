import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  private url='https://trasladista-f5e9d.firebaseio.com';

  constructor(private http:HttpClient) { }

 



}
