
// Se importa lo que es el Component y OnInit
import { Component, OnInit } from '@angular/core';
// Se importa lo que es el MessageService
import { MessageService } from '../message.service';


// mandando a llamar el mensaje que se va estar asignando  del archvivo html y css
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

// Se exporta lo que es MessageService implementado OnInit
export class MessagesComponent implements OnInit {

  //Requerimos un contructor para el messageService se utilize como publico 
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
