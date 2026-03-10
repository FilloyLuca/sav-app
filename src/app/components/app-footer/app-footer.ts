import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  // imports: [RouterLink, RouterLinkActive],
  imports: [RouterLink],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.css',
})

export class Footer {
  
}
