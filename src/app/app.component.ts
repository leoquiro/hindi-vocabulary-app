import { Component } from '@angular/core';
import { MaterialModule } from './assets/material/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MaterialModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hindi-vocabulary-app';
}
