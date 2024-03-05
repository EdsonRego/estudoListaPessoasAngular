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

  //nombreInput: String = '';
  //apellidoInput: String = '';

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  //Dependency Injection, via construtor
  constructor(private loggingSevice: LoggingService,
    private personasService: PersonasService) {
      this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice)
    );
  }

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //this.loggingSevice.enviarMensagemAConsole("Enviamos persona con nombre: " + persona1.nombre + " apellido " + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }

}
