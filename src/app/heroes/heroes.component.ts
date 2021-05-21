import { HeroService } from './../hero.service';
// Realiza la impotacion del componete y OnInit
import { Component, OnInit } from '@angular/core';
//Importa los datos que contenga de las variables de Hero
import { Hero } from '../hero';

//Se manda a importar lo que se genero de MessagesService
import { MessageService } from '../message.service';


// mandando a llamar los los detalles de heroe del archvi html y css
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Se exporta de lo que se encuentra de HeroesComponent
export class HeroesComponent implements OnInit {
// Se selecciona el hero
  selectedHero?: Hero;
// Esto nos permite actualizar lo que se encuentra en Heroes y que define la propiedad del Heroe
  heroes: Hero[] = [];


  // Este contructor es paar que se defina messageService como privada
  constructor(private heroService: HeroService, private messageService: MessageService) { }

// Nos va permite mandar a llavar los datos de heroes y recuperarlos del servicio
  ngOnInit() {
    this.getHeroes();
  }

// Se selecciona lo que son los heroes
  onSelect(hero: Hero): void {
    this.selectedHero = hero; // Ya selecionados
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`); // Se va a mandar a llamar los heroes por medio del id para que manden mensajes
  }
// Se realiza la funcion de getHeroes para mandar a llavar a HeroService
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}


