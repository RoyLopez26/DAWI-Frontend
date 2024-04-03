import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AppMaterialModule} from './app.material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AppMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DAWII-Sesion03-2024-FrontEnd';
}
