import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @ViewChild('sliderRef', { static: false }) sliderRef!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    if (this.sliderRef) {
      this.sliderRef.nativeElement.scrollBy({
        left: -window.innerWidth * 0.9,
        behavior: 'smooth'
      });
    }
  }

  scrollRight() {
    if (this.sliderRef) {
      this.sliderRef.nativeElement.scrollBy({
        left: window.innerWidth * 0.9,
        behavior: 'smooth'
      });
    }
  }

   scrollLeft1(carousel: HTMLElement) {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight1(carousel: HTMLElement) {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
