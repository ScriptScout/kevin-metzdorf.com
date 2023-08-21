import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
    const home = document.getElementById('home')!.getBoundingClientRect().top;
    const about = document.getElementById('about_me')!.getBoundingClientRect().top;
    const skills = document.getElementById('skills')!.getBoundingClientRect().top;
    const portfolio = document.getElementById('portfolio')!.getBoundingClientRect().top;
    const contact = document.getElementById('contact')!.getBoundingClientRect().top;
    if (home <= 0 && home > -164) this.activeSection = '';
    if (about < 663 && about > -53) this.activeSection = 'about';
    if (skills < 585 && skills > 86) this.activeSection = 'skills';
    if (portfolio < 769 && portfolio > -500) this.activeSection = 'portfolio';
    if (contact < 855 && contact > 19) this.activeSection = 'contact';
  }
}
