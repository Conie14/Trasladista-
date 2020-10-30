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

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClientesComponent


  ],
  imports: [
    BrowserModule ,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
