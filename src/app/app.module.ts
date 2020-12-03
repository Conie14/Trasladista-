import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule}from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormControl, FormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import{AppRoutingModule}from './app-routing.module';
import { OperadorComponent } from './pages/operador/operador.component';
import { OperadoresComponent } from './pages/operadores/operadores.component';
import{AngularFireDatabaseModule}from'@angular/fire/database';
import { VeiculoComponent } from './pages/veiculo/veiculo.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ListaComponent } from './pages/lista/lista.component';
import { ListasComponent } from './pages/listas/listas.component';
import{AngularFireStorageModule}from '@angular/fire/storage';
import { from } from 'rxjs';
import { ViaticoComponent } from './pages/viatico/viatico.component';
import { ViaticosComponent } from './pages/viaticos/viaticos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClientesComponent,
    OperadorComponent,
    OperadoresComponent,
    VeiculoComponent,
    VeiculosComponent,
    ServicioComponent,
    ServiciosComponent,
    ListaComponent,
    ListasComponent,
    ViaticoComponent,
    ViaticosComponent


  ],
  imports: [
    BrowserModule ,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    AngularFireDatabaseModule,


    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
