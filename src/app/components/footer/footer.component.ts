import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
  
})
export class FooterComponent {
constructor(private router: Router, private themeService: ThemeService) {} // ✅ Proper Angular DI
  isDark = true;
  ngOnInit() {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }
toggleDarkMode() {
  this.isDark = !this.isDark;
  const root = document.documentElement;
  if (this.isDark) {
    root.classList.remove('light-mode');
  } else {
    root.classList.add('light-mode');
  }
}
}
