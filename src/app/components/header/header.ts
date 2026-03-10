import { Component } from '@angular/core';
import { AppNavbar } from '../app-navbar/app-navbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [AppNavbar, RouterLink, RouterLinkActive],
  // imports: [AppNavbar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
}