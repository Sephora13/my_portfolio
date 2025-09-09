import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
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

scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  this.toggleMenu();
}


}
