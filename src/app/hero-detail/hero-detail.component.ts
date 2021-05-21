// se importa el componente, el OnInit, Input
import { Component, OnInit ,Input} from '@angular/core';
// realiza las importación  de las variables que contiene hero.ts
import{Hero }from '../hero';

// mandando a llamar los los detalles de heroe del archvivo html y css
@Component({
  selector: 'app-hero-detail',
  //Lo que se encuentra en esta direccion el HTML
  templateUrl: './hero-detail.component.html',
  //Lo que se requiere en diseño en css
  styleUrls: ['./hero-detail.component.css']
})

// expota lo que contiene el HeroDetailComponent
export class HeroDetailComponent implements OnInit {

  //realiza una entrada de datos de lo que contiene Hero
  @Input() hero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
