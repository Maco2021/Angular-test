import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {Note} from './models/note.model';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  imports: [CommonModule, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
handleSubscribe() {
  console.log('Subscribe button clicked');
  alert('Thank you for subscribing');
}




protected readonly notes = signal<Note[]>([

  { id: 1, 
    title: 'Note 1', 
    content: 'This is the content of note 1', createdAt: new Date() 
  },
    {
      id: 2,
    title: 'Note 2',
    content: 'This is the content of note 2', createdAt: new Date()

    }
])
}
