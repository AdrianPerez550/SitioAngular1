
// Se importa de la clase  de NgModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Se importa los formularios que basados en plantillas que se requieren
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Se manda  a llavar el componente de AppComponent
import { AppComponent } from './app.component';
// Se manda la importacion de HeroesComponent que se genero
import { HeroesComponent } from './heroes/heroes.component';
//  Se manda la importacion de HeroDetailComponent que se genero
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// Se importa lo que es MessagesComponent que se genero
import { MessagesComponent } from './messages/messages.component';

// Se manda en la parte de NgModule los componetes que se utilizaron
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
//  Y se manda a llavar modulos que se utilizaron
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
