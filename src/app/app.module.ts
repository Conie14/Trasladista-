import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ListaVerificacionComponent } from './lista-verificacion/lista-verificacion.component';
import { ViaticosComponent } from './viaticos/viaticos.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { OperadoresComponent } from './operadores/operadores.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ServiciosComponent,
    ListaVerificacionComponent,
    ViaticosComponent,
    VeiculosComponent,
    OperadoresComponent,
    SeguimientoComponent,
    NotificacionesComponent,

  ],
  imports: [
    BrowserModule ,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
