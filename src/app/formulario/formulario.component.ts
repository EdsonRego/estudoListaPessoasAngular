import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  providers: [LoggingService]
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();


  //nombreInput: String = '';
  //apellidoInput: String = '';

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  //Dependency Injection, via construtor
  constructor(private loggingSevice: LoggingService) { }

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.loggingSevice.enviarMensagemAConsole("Enviamos persona con nombre: " + persona1.nombre + " apellido " + persona1.apellido);
    this.personaCreada.emit(persona1);
  }

}
