import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../theme.service';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap/all';
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit{
    @ViewChild('sidebar') sidebar!: ElementRef;
    @ViewChild('content') content!: ElementRef;

    ngAfterViewInit(): void {
      
    gsap.from(this.content.nativeElement, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out'
    });
  }

  setTab(tabId: string) {
  this.activeTab = tabId;

  // Animate active tab label fade & slide in
  gsap.fromTo(
    `.tab.active .tab-label`,
    { opacity: 0, x: -10 },
    { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
  );

  // Animate active tab icon scale pulse
  gsap.fromTo(
    `.tab.active .tab-icon`,
    { scale: 1 },
    { scale: 1.15, yoyo: true, repeat: 1, duration: 0.3, ease: 'power1.inOut' }
  );

  // Animate the content fade & slide in on tab change
  gsap.from(this.content.nativeElement, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: 'power2.out',
  });
}


  isDark = true;

  activeTab = 'journey'; // default tab
tabs = [
  { id: 'journey', label: 'My Journey', icon: '🚀' },
  { id: 'offer', label: 'What I Offer', icon: '💡' },
  { id: 'seek', label: 'My Goals', icon: '🎯' },
  { id: 'personality', label: 'Personality', icon: '🌟' },
];



  toggleDarkMode() {
  this.isDark = !this.isDark;
  const root = document.documentElement;
  if (this.isDark) {
    root.classList.remove('light-mode');
  } else {
    root.classList.add('light-mode');
  }
}


constructor(private router: Router) {}


goHome(): void {
  this.router.navigate(['/']);
}




}

