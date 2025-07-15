import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(true); // default is dark
  darkMode$ = this.darkMode.asObservable();

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }

  setDarkMode(isDark: boolean) {
    this.darkMode.next(isDark);
  }

  isDarkMode(): boolean {
    return this.darkMode.value;
  }
}
