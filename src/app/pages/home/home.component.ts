import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../theme.service';
import { ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
   portalActivated = false;
  portalOpening = false;
  showTerminal = false;
  terminalLines: string[] = [];
  @ViewChild('orbRef') orbRef!: ElementRef;

  constructor(private router: Router) {}

  activatePortal() {
    if (this.portalActivated) return;

    this.portalOpening = true;

    const lines = [
      "    __    ____   ___     ____   ____ _   __ ______",
      "   / /   / __ \\ /   |   / __ \\ /  _// | / // ____/",
      "  / /   / / / // /| |  / / / / / / /  |/ // / __  ",
      " / /___/ /_/ // ___ | / /_/ /_/ / / /|  // /_/ /  ",
      "/_____/\\____//_/  |_|/_____//___//_/ |_/ \\____/   "
    ];

    this.terminalLines = [];
    let lineIndex = 0;

     const interval = setInterval(() => {
    if (lineIndex < lines.length) {
      this.terminalLines.push(lines[lineIndex]);
      lineIndex++;
    } else {
      clearInterval(interval);

      // Don't hide portalOpening yet to keep terminal visible
      // this.portalActivated = true;
      // this.portalOpening = false;

      // Navigate after slight delay to give user time to see full text
      setTimeout(() => {
        this.portalActivated = true;   // Optional: mark portal as activated now
        this.portalOpening = false;    // Optional: hide portal in home component after navigation starts

        this.router.navigate(['/radial-selector']);
      }, 100);
    }
  }, 150);
}
  ngOnInit(): void {}

     onMouseMove(event: MouseEvent) {
    if (this.portalActivated || this.portalOpening || !this.orbRef) return;

    const orbEl = this.orbRef.nativeElement as HTMLElement;
    const rect = orbEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (event.clientX - centerX) * 0.15;
    const offsetY = (event.clientY - centerY) * 0.15;

    orbEl.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  onMouseLeave() {
    if (this.orbRef) {
      const orbEl = this.orbRef.nativeElement as HTMLElement;
      orbEl.style.transform = 'translate(0, 0)';
    }
  }
  particles = Array.from({ length: 30 }, () => ({
  x: Math.random(), // between 0 and 1 (used in left position)
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 5
}));

}
