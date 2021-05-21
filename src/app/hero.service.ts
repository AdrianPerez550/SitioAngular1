// Se importa lo que es  la funcion Injectable
import { Injectable } from '@angular/core';
// Se solicita los que son las variables de hero
import { Hero } from './hero';
// Se manda los HEROES que se encuentra en la dirrecion de Mock-heroes
import { HEROES } from './mock-heroes';
// Se importa lo que Observable de la biblioteca de Rxjs
import { Observable, of } from 'rxjs';
// Se manda a llamar los MessageService
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
//Se exporta lo que HeroService para mandar la clase de getHeroes
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // Se relizara la funcion de messagesServices
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
   //El constructor se maneja como privado el MessageService
  constructor(private messageService: MessageService) { }


}



