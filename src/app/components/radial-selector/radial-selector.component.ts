import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radial-selector',
  templateUrl: './radial-selector.component.html',
  styleUrl: './radial-selector.component.css'
})
export class RadialSelectorComponent {
  portalActivated = true; // ensure it's true to show radial selector immediately after navigating

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  goBackToHome() {
    this.router.navigate(['/']);  // redirect back to home component
  }
  
}

