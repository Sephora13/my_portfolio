import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PrincipalComponent, ProjectsComponent, SkillsComponent, AboutComponent, ContactComponent, FooterComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  constructor(private router: Router){}
  
  scrollLeft(container: HTMLElement) {
    container.scrollBy({ left: -200, behavior: 'smooth' });
  }
  
  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: 200, behavior: 'smooth' });
  }

  
}
