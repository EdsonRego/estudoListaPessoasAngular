import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit {

  /*Recebendo informações do componente pai */
  @Input() persona: Persona;
  @Input() indice: number;

  constructor() { }

  ngOnInit(): void {

  }

}
