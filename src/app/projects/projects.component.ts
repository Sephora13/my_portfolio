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
   @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  scroll(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 400; // largeur à scroller à chaque clic

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
    projects = [
    {
      name: "Gestion d'examens scolaires",
      description: "Automatisations du déroulement des examens scolaires.",
      image: "assets/images/academia.png",
      tags: ["Angular", "Tailwind", "NestJs", "Fast-Api", "PostgreSQL"],
      alt:"appli de gestion d'examens scolaires"
    },

    {
      name: "Appli de paiement des frais scolaires",
      description: "Conçue pour permettre aux étudiants et à leurs parents de payer les frais de scolarité en ligne sans se déplacer vers le sécrétariat de l'école",
      image: "assets/images/Scholar.png",
      alt:"appli de paiement des frais scolaires",
      tags: ["Flutter", "MySQL"],
    },

    {
      name: "SozoBehealthy Landing Page",
      description: "Présentation d'un livre de nutrition avec commande et paiement en ligne",
      image: "assets/images/sozo1.png",
      alt:"SozoBehealthy Landing Page",
      tags: ["PHP", "Boostrap", "MySQL"],
    },

    {
      name: "Bites",
      description: "Interfaces d'applications réalisées pour exercice personnel",
      image: "assets/images/3.png",
      alt:"Bites",
      tags: ["Flutter"],
    },

    {
      name: "Portfolio",
      description: "Présentation de mes compétences et réalisations",
      image: "assets/images/portfolio.png",
      alt:"Sephora DIDAVI Portfolio",
      tags: ["Angular", "Tailwind"],
    }
  ]

  experiences = [
    {
      date_deb: "Juillet 2024",
      date_fin: "Septembre 2024",
      title: "Biovatech Bénin",
      description: "Stage professionnel dévéloppeur fullstack. Dévéloppement d'une application web de formations.",
      tags: ["NestJS", "Angular", "Tailwind", "Mongo DB", "Firebase"],
    },

    {
      date_deb: "Aout 2025",
      date_fin: "Présent",
      title: "Elites Studio",
      description: "Dévéloppeur fullstack. Dévéloppement de solutions digitales, stratégie de digitalisation.",
      tags: ["NestJS", "Angular", "Tailwind", "Mongo DB", "Firebase", "MySQL", "Scrum", "UML", "IA"],
    },

  ];
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
