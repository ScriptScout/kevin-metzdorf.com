import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  projects: any = [
    {
      name: 'Senior Shopify-Entwickler',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Optimierung der Performance, Sicherheit und Stabilität durch Analyse, Fehlerbehebung, Code-Review und Implementierung von Best Practices. Anpassung und Erweiterung des Shops nach Kundenwunsch, Implementierung neuer Funktionen und Integration von Drittanbieter-Apps.',
      image: 'decocino.jpeg',
      animation: 'fade-right',
    },
    {
      name: 'El Polo Locco',
      technologies: 'JavaScript | HTML | CSS | OOP',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: 'el_pollo_loco.webp',
      animation: 'fade-left',
      github: 'https://github.com/ScriptScout',
      live: 'https://kevin-metzdorf.de/el_pollo_locco'
    },
    {
      name: 'E-Shop Manager',
      technologies: 'ITIL | Scrum | Shopify | Xentral',
      description: 'Sicherstellung der Warenverfügbarkeit durch permanente Bestandskontrolle, Optimierung der Lagerhaltung durch MHD-Prüfung und -management, sowie proaktive Warennachbestellung und -anmeldung. Kommunikation und Klärung von Lieferfragen mit Logistikpartnern zur reibungslosen Warenanlieferung und Sicherstellung eines hohen Kundenzufriedenheitsniveaus.',
      image: 'ready2drink.jpeg',
      animation: 'fade-right',
      github: '',
      live: 'https://ready2drink.de'
    }
  ]
}
