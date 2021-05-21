
//Se importa el Injectable
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
//Se exporta el MessageService
export class MessageService {
  messages: string[] = [];
//Realiza de mandar mensaje cuando interactuamos con los datos
  add(message: string) {
    this.messages.push(message);
  }
//Se realiza la limpieza  de los mensajes
  clear() {
    this.messages = [];
  }
}
