import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    constructor(private router: Router) { }  // only declare router here
  
  sendMessage() {
    alert("Message sent! (Functionality placeholder)");
  }
  isSidebarCollapsed = true;

  files = [
    { name: 'Business', message: 'Let’s work on your next big project.' },
    { name: 'Freelance', message: 'Freelance availability — send the idea.' },
    { name: 'Let\'s Talk', message: 'Have something in mind? Let’s chat.' }
  ];
  activeFile = this.files[0];

  selectFile(file: any) {
    this.activeFile = file;
  }
goBack() {
  this.router.navigate(['/home']);
}



    isPanelVisible = true;
  isPanelMinimized = false;
  isPanelMaximized = false;
    permissionMessage: string | null = null;

   closePanel() {
    this.router.navigate(['/home']);
  }

  minimizePanel() {
    this.isPanelMinimized = !this.isPanelMinimized;
  }

  maximizePanel() {
    this.isPanelMaximized = !this.isPanelMaximized;
  }
  showPermissionMessage() {
    this.permissionMessage = "You don't have permission to do this";

    setTimeout(() => {
      this.permissionMessage = null;
    }, 1500);
  }
}


