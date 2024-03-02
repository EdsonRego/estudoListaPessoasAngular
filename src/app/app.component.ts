import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara')
  ];
  nombreInput: String = '';
  apellidoInput: String = '';

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
