import { Component, NgModule } from '@angular/core';
import{RouterModule, Routes}from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { OperadorComponent } from './pages/operador/operador.component';
import { OperadoresComponent } from './pages/operadores/operadores.component';
import { VeiculoComponent } from './pages/veiculo/veiculo.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';


const routes:Routes=[

  {path:'clientes', component: ClientesComponent},
  {path:'cliente/:id', component: ClienteComponent},
  {path:'',pathMatch:'full',redirectTo:'clientes'},

  {path:'operadores',component:OperadoresComponent},
  {path:'operador/:id',component:OperadorComponent},
  {path:'',pathMatch:'full',redirectTo:'operadores'},

  {path:'veiculos',component:VeiculosComponent},
  {path:'veiculo/:id',component:VeiculoComponent},
  {path:'',pathMatch:'full',redirectTo:'veiculos'},

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
