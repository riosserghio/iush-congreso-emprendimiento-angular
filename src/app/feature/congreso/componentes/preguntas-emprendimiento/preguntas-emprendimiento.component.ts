import { Component, Input, input } from '@angular/core';
import { Emprendedor } from '../../../../shared/interfaces/emprendedor.interface';

@Component({
  selector: 'app-preguntas-emprendimiento',
  templateUrl: './preguntas-emprendimiento.component.html',
  styleUrl: './preguntas-emprendimiento.component.scss'
})
export class PreguntasEmprendimientoComponent {

  @Input() emprendedorCreado?:Emprendedor;
}
