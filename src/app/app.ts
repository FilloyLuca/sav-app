import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './components/app-navbar/app-navbar';
import { Footer } from './components/app-footer/app-footer';



// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,AppFooter],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('sav-app');

// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, Footer], // Ajout de Footer
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sav-app');
}
