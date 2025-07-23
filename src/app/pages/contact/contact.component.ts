import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    constructor(private router: Router) { }  // only declare router here
  
sendMessage() {
  const form = document.querySelector('.contact-form') as HTMLFormElement;

  if (!form) {
    alert("Form not found.");
    return;
  }

  emailjs.sendForm(
    'portfolio',    // 🔁 Replace this
    'template_hgh2bvf',   // 🔁 Replace this
    form,
    '222asLRJy7fUfJDbj'     // 🔁 Replace this
  ).then(() => {
    alert('Message sent successfully! ✅');
    form.reset();
  }, (error) => {
    alert('Failed to send message ❌');
    console.error('EmailJS Error:', error);
  });
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



