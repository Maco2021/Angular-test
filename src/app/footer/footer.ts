import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
@Output() subscribeClicked = new EventEmitter<void>();

onSubscribe() {
  this.subscribeClicked.emit();
  }
}

