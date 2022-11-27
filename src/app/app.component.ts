import { Component } from '@angular/core';
import { EmpleadoService } from './empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmpleadoService],
})
export class AppComponent {
  title = 'Sistema gestion de empleados';
}
