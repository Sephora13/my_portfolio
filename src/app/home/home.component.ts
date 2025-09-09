import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PrincipalComponent, ProjectsComponent, SkillsComponent, AboutComponent, ContactComponent, FooterComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  constructor(private router: Router,  private title: Title, private meta: Meta) {
    this.title.setTitle('Sephora DIDAVI - Accueil');
    this.meta.updateTag({ name: 'description', content: 'Bienvenue sur mon portfolio, découvrez mes projets et compétences.' });
  }

  ngAfterViewInit() {
  const container = document.querySelector<HTMLElement>('main');

  if (container) {
    container.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();

        container.scrollBy({
          left: e.deltaY,
          behavior: 'smooth'
        });
      }
    }, { passive: false });
  }

  // Sélection des sections
  const sections = document.querySelectorAll('main section');

  // Observer pour fadeIn
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
      }
    });
  }, {
    threshold: 0.3,  // déclenche quand ~30% visible
    root: container, // ⚡ important : observer dans ton "main"
  });

  sections.forEach(section => observer.observe(section));
}

  
}
