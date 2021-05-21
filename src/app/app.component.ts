
// Se importa el componete que se creo
import { Component } from '@angular/core';

// mandando a llamar los los detalles de heroe del archvi html y css
@Component({
  selector: 'app-root',
  // Que son datos que del html en la dirrecion de app
  templateUrl: './app.component.html',
  // Se manda a llavar los estilos que se requiren de css
  styleUrls: ['./app.component.css']
})

// Lo que se requiere en el app.component.html para poner el titulo de la pagina web
export class AppComponent {
  title = 'Página de Super heroes';
}
