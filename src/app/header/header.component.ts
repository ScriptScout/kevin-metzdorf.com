import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {

  activeSection: string = '';
  menuOpen: boolean = false;

  ngOnInit() {
    this.menuEventListener();
  }

  openMenu() {
    this.menuOpen = !this.menuOpen;
  }

  menuEventListener() {
    const menu = document.querySelectorAll('a.nav_link');
    menu.forEach(link => {
      link.addEventListener('click', (event) => {
        this.openMenu();
        this.resetMenuActive();
        link.classList.add('active');
      });
    });
  }

  resetMenuActive() {
    const menu = document.querySelectorAll('a.nav_link');
    menu.forEach(link => {
      link.classList.remove('active');
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Sichere Null-Checks - KEIN ! Operator
    const homeElement = document.getElementById('home');
    const aboutElement = document.getElementById('about_me');
    const skillsElement = document.getElementById('skills');
    const portfolioElement = document.getElementById('portfolio');
    const contactElement = document.getElementById('contact');

    // Früh beenden wenn Elemente nicht existieren
    if (!homeElement || !aboutElement || !skillsElement || !portfolioElement || !contactElement) {
      return; // Stoppe Ausführung wenn Elemente fehlen
    }

    // Jetzt sicher getBoundingClientRect() aufrufen
    const home = homeElement.getBoundingClientRect().top;
    const about = aboutElement.getBoundingClientRect().top;
    const skills = skillsElement.getBoundingClientRect().top;
    const portfolio = portfolioElement.getBoundingClientRect().top;
    const contact = contactElement.getBoundingClientRect().top;

    if (home <= 0 && home > -164) this.activeSection = '';
    if (about < 663 && about > -53) this.activeSection = 'about';
    if (skills < 585 && skills > 86) this.activeSection = 'skills';
    if (portfolio < 769 && portfolio > -500) this.activeSection = 'portfolio';
    if (contact < 855 && contact > 19) this.activeSection = 'contact';
  }
}
