import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpen: boolean = false;

  ngOnInit() {
    this.listenToMenu();
  }

  openMenu() {
    this.menuOpen = !this.menuOpen;
  }

  listenToMenu() {
    const menu = document.querySelectorAll('a.hover_underline_animation');
    menu.forEach(link => {
      link.addEventListener('click', (event) => {
        this.openMenu();
      });
    });
  }
}
