import { Component, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent {
  scrolled = false;
  menuOpen = false;
  isDark = true;

  stars = new Array(15);
  shootingStars = new Array(0);
  planets = new Array(2);

  mouseX = 0;
  mouseY = 0;
  

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      this.isDark = savedTheme !== 'light'; // default to dark
      this.updateTheme();
    }
  }

  updateTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.body;
      if (this.isDark) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
      } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
      }
    }
  }
  
  handleMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX / window.innerWidth - 0.5;
    this.mouseY = event.clientY / window.innerHeight - 0.5;
  
    const elements = document.querySelectorAll('.layer');
    elements.forEach((el: any, index) => {
      const depth = (index % 5 + 1) * 3;
      const x = this.mouseX * depth;
      const y = this.mouseY * depth;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  getStarStyle(type: string) {
    const top = Math.random() * 100 + '%';
    const left = Math.random() * 100 + '%';

    if (type === 'shooting') {
      const delay = (Math.random() * 10).toFixed(2) + 's';
      return {
        top,
        left,
        animationDelay: delay
      };
    }

    if (type === 'planet') {
      const size = Math.random() * 15 + 10;
      return {
        top,
        left,
        width: `${size}px`,
        height: `${size}px`
      };
    }

    // default for star
    return {
      top,
      left,
      animationDuration: `${(Math.random() * 5 + 5).toFixed(2)}s`
    };
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    // document.body.classList.toggle('dark', this.isDark);
    

    const body = document.body;
    if(this.isDark){
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }


  // In your Angular component
magneticAnimations = new Map<HTMLElement, number>();

onMouseMove(event: MouseEvent): void {
  const element = event.target as HTMLElement;

  // Get link dimensions and cursor position relative to its center
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;

  const strength = 0.4;

  if (this.magneticAnimations.has(element)) {
    cancelAnimationFrame(this.magneticAnimations.get(element)!);
  }

  const animate = () => {
    const currentTransform = element.style.transform.match(/translate\((.*)px,\s*(.*)px\)/);
    const currentX = currentTransform ? parseFloat(currentTransform[1]) : 0;
    const currentY = currentTransform ? parseFloat(currentTransform[2]) : 0;

    const dx = x * strength - currentX;
    const dy = y * strength - currentY;

    const nextX = currentX + dx * 0.15;
    const nextY = currentY + dy * 0.15;

    element.style.transform = `translate(${nextX}px, ${nextY}px)`;

    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      const frame = requestAnimationFrame(animate);
      this.magneticAnimations.set(element, frame);
    }
  };

  animate();
}

onMouseLeave(event: MouseEvent): void {
  const element = event.target as HTMLElement;

  if (this.magneticAnimations.has(element)) {
    cancelAnimationFrame(this.magneticAnimations.get(element)!);
    this.magneticAnimations.delete(element);
  }

  const reset = () => {
    const currentTransform = element.style.transform.match(/translate\((.*)px,\s*(.*)px\)/);
    const currentX = currentTransform ? parseFloat(currentTransform[1]) : 0;
    const currentY = currentTransform ? parseFloat(currentTransform[2]) : 0;

    const dx = -currentX;
    const dy = -currentY;

    const nextX = currentX + dx * 0.15;
    const nextY = currentY + dy * 0.15;

    element.style.transform = `translate(${nextX}px, ${nextY}px)`;

    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      const frame = requestAnimationFrame(reset);
      this.magneticAnimations.set(element, frame);
    } else {
      element.style.transform = 'translate(0px, 0px)';
      this.magneticAnimations.delete(element);
    }
    
  };

  reset();
}

}
