import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  projects: any = [
    {
      name: ' Shopify-Entwickler',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Optimierung der Performance, Sicherheit und Stabilität durch Analyse, Fehlerbehebung, Code-Review und Implementierung von Best Practices. Anpassung und Erweiterung des Shops nach Kundenwunsch, Implementierung neuer Funktionen und Integration von Drittanbieter-Apps.',
      image: 'decocino.jpeg',
      animation: 'fade-right',
      github: 'https://github.com/ScriptScout',
      live: 'https://decocino.com',
    },
    {
      name: 'El Polo Locco',
      technologies: 'JavaScript | HTML | CSS | OOP',
      description: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe dabei, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      image: 'el_pollo_loco.webp',
      animation: 'fade-left',
      github: 'https://github.com/ScriptScout',
      live: 'https://kevin-metzdorf.de/'
    },
    {
      name: 'E-Shop Manager',
      technologies: 'ITIL | Scrum | Shopify | Xentral',
      description: 'Sicherstellung der Warenverfügbarkeit durch permanente Bestandskontrolle, Optimierung der Lagerhaltung durch MHD-Prüfung und -management, sowie proaktive Warennachbestellung und -anmeldung. Kommunikation und Klärung von Lieferfragen mit Logistikpartnern zur reibungslosen Warenanlieferung und Sicherstellung eines hohen Kundenzufriedenheitsniveaus.',
      image: 'ready2drink.jpeg',
      animation: 'fade-right',
      github: 'https://github.com/ScriptScout',
      live: 'https://ready2drink.de'
    },
    {
      name: ' JTL Wawi Experte ',
      technologies: 'JTL | Shopify | Windows Server',
      description: 'Durch die Entwicklung eines PowerShell-Skripts, die Integration mit dem Windows Task Scheduler, die Verwendung der JTL-Ameise und die Einrichtung der Shopify-Integration wurde ein umfassender und automatisierter Datenimport- und Synchronisierungsprozess implementiert.',
      image: 'suppotheke.jpeg',
      animation: 'fade-left',
      github: 'https://github.com/ScriptScout',
      live: 'https://suppotheke.de'
    },
  ]
}
