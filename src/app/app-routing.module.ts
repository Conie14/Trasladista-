import { Component, NgModule } from '@angular/core';
import{RouterModule, Routes}from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { OperadorComponent } from './pages/operador/operador.component';
import { OperadoresComponent } from './pages/operadores/operadores.component';


const routes:Routes=[

  {path:'clientes', component: ClientesComponent},
  {path:'cliente/:id', component: ClienteComponent},
  {path:'',pathMatch:'full',redirectTo:'clientes'},

  {path:'operadores',component:OperadoresComponent},
  {path:'operador/:id',component:OperadorComponent},
  {path:'',pathMatch:'full',redirectTo:'operadores'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),


  ],
  exports:[
    RouterModule
  ],

})
export class AppRoutingModule { }
