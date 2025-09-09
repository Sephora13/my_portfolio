import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  currentIndex = 0;

   
scrollToNext() {
  const container = document.querySelector('main');
  const sections = container?.querySelectorAll('section');

  if (sections && container) {
    this.currentIndex = (this.currentIndex + 1) % sections.length;
    const nextSection = sections[this.currentIndex];
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

  }
}

}
