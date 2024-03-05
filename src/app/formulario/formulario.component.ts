import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {

  nombreInput: String = '';
  apellidoInput: String = '';

  //Dependency Injection, via construtor
  constructor(private loggingSevice: LoggingService,
    private personasService: PersonasService) {
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice)
    );
  }

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personasService.agregarPersona(persona1);
  }
}
