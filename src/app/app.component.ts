import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  isLoading = true;
  fadeOutLoader = false;
  
  // constructor() {
  //   setTimeout(() => {
  //     this.fadeOutLoader = true;

  //     setTimeout(() => {
  //       this.isLoading = false;
  //     }, 1000);
  //   }, 3000);
  // };

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 1500);
  // }
}
