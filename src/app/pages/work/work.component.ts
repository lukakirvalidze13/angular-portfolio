import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  id: string;
  title: string;
  description: string;
  img: string;
  unlocked: boolean;
  puzzle: string;
  answer: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  logs: string[] = [
    '>> SYSTEM BOOTING...',
    '>> ENTER ACCESS CODE OR SOLVE PUZZLE TO UNLOCK PROJECTS'
  ];

  projects: Project[] = [
    {
      id: '001',
      title: 'Neon Web Revamp',
      description: 'A cutting-edge portfolio with futuristic neon effects.',
      img: 'https://via.placeholder.com/400x200?text=Neon+Web+Revamp',
      unlocked: false,
      puzzle: 'I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?',
      answer: 'echo'
    },
    {
      id: '002',
      title: 'Crypto Dashboard',
      description: 'Real-time crypto prices with blockchain data integration.',
      img: 'https://via.placeholder.com/400x200?text=Crypto+Dashboard',
      unlocked: false,
      puzzle: 'I am not alive, but I grow; I don’t have lungs, but I need air. What am I?',
      answer: 'fire'
    },
    {
      id: '003',
      title: 'AI Chatbot',
      description: 'Smart customer support chatbot with NLP capabilities.',
      img: 'https://via.placeholder.com/400x200?text=AI+Chatbot',
      unlocked: false,
      puzzle: 'The more of me you take, the more you leave behind. What am I?',
      answer: 'footsteps'
    }
  ];

  unlockingProject: Project | null = null;
  xp: number = 0;
  level: number = 1;
  constructor(private router: Router) { }  // only declare router here


  startUnlocking(project: Project) {
    this.unlockingProject = project;
    this.logs.push(`>> PUZZLE: ${project.puzzle}`);
  }

  submitAnswer(input: HTMLInputElement) {
    if (!this.unlockingProject) return;

    const ans = input.value.trim().toLowerCase();
    input.value = '';

    if (ans === this.unlockingProject.answer) {
      this.unlockingProject.unlocked = true;
      this.logs.push(`>> PROJECT "${this.unlockingProject.title}" UNLOCKED! +10 XP`);
      this.xp += 10;
      this.checkLevelUp();
      this.unlockingProject = null;
    } else {
      this.logs.push('>> INCORRECT ANSWER. TRY AGAIN.');
    }
  }

  checkLevelUp() {
    const nextLevelXP = this.level * 20;
    if (this.xp >= nextLevelXP) {
      this.level++;
      this.logs.push(`>> LEVEL UP! You reached Level ${this.level}`);
    }
  }
  
    goHome() {
    this.router.navigate(['/']); // change to your home route if it's not root
  }


    showPopup: boolean = false;

  closePopup() {
    this.showPopup = false;
  }
showInfoPopup = false;
displayedText = '';
infoMessages = [
  "Hey there! 👋 This is my very first portfolio site. I'm working on new projects, sharpening my frontend and backend skills every day. Stay tuned for updates!",
  "Welcome! Building this portfolio is my first big step in web development. I’m passionate about coding and learning. Frontend and backend, more projects soon!",
  "Yo! This is my debut portfolio site 🚀 Juggling projects to level up my coding game. Frontend gets my eye, backend gets my soul. Thanks for checking it out!",
];

 currentMessageIndex = 0;
  typingTimeout: any;

  showMoreInfo() {
    this.showInfoPopup = true;
    this.displayedText = '';

    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }

    // Start typing the current message
    const messageToType = this.infoMessages[this.currentMessageIndex];
    this.typeWriterEffect(messageToType, 0);

    // Prepare for next message on next open
    this.currentMessageIndex = (this.currentMessageIndex + 1) % this.infoMessages.length;
  }

  closeInfoPopup() {
    this.showInfoPopup = false;

    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }

    this.displayedText = '';
  }

  typeWriterEffect(text: string, i: number) {
    if (i < text.length) {
      this.displayedText += text.charAt(i);
      this.typingTimeout = setTimeout(() => {
        this.typeWriterEffect(text, i + 1);
      }, 50);
    }
  }
}