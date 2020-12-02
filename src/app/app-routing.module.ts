import { Component, NgModule } from '@angular/core';
import{RouterModule, Routes}from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { OperadorComponent } from './pages/operador/operador.component';
import { OperadoresComponent } from './pages/operadores/operadores.component';
import { VeiculoComponent } from './pages/veiculo/veiculo.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ListasComponent } from './pages/listas/listas.component';
import { ListaComponent } from './pages/lista/lista.component';


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

  {path:'servicios',component:ServiciosComponent},
  {path:'servicio/:id',component:ServicioComponent},
  {path:'',pathMatch:'full',redirectTo:'servicios'},

  {path:'listas',component:ListasComponent},
  {path:'lista/:id',component:ListaComponent},
  {path:'',pathMatch:'full',redirectTo:'servicios'},

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
