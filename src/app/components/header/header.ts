import { Component, inject } from '@angular/core';
import { AppNavbar } from '../app-navbar/app-navbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [AppNavbar, RouterLink, RouterLinkActive],
  // imports: [AppNavbar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
// Dans header.ts et navbar.ts : injecter le service
  public authService = inject(AuthService);
}