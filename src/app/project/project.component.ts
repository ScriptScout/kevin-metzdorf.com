import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  projects: any = [
    {
      name: 'Happylamps',
      technologies: 'Shopify | Liquid | JavaScript | HTML | CSS',
      description: 'Technische Betreuung und Entwicklung des Shopify-Shops Happylamps. Optimierung des Designs, Performance und Integration von Drittanbieter-Apps.',
      image: 'happylamps.png',
      animation: 'fade-right',
      github: 'https://github.com/ScriptScout',
      live: 'https://happylamps.com/'
    },
    {
      name: 'NolaTea',
      technologies: 'Shopify | Liquid | JavaScript | HTML | CSS',
      description: 'Technische Umsetzung und Weiterentwicklung des NolaTea Shopify-Shops. Implementierung neuer Features und Conversion-Optimierung.',
      image: 'nolatealogo.avif',
      animation: 'fade-left',
      github: 'https://github.com/ScriptScout',
      live: 'https://nolatea.com'
    },
    {
      name: 'Glytter',
      technologies: 'Shopify | Liquid | JavaScript | HTML | CSS',
      description: 'Entwicklung und kontinuierliche Optimierung des Glytter Shopify-Shops mit Fokus auf Benutzerfreundlichkeit und Performance.',
      image: 'glytter-logo.png',
      animation: 'fade-right',
      github: 'https://github.com/ScriptScout',
      live: 'https://glytter.eu'
    },
    {
      name: 'Decocino',
      technologies: 'Shopify | Liquid | JavaScript | HTML | CSS',
      description: 'Technische Betreuung und Weiterentwicklung des Decocino Shopify-Shops. Integration neuer Apps und Optimierung der Customer Journey.',
      image: 'decocino-logo.png',
      animation: 'fade-left',
      github: 'https://github.com/ScriptScout',
      live: 'https://decocino.com'
    },
    {
      name: 'Einfach Lecker',
      technologies: 'Shopify | Liquid | JavaScript | HTML | CSS',
      description: 'Shopify-Optimierung für den Einfach Lecker Shop. Performance-Steigerung, UI-Design-Anpassungen und technische Betreuung.',
      image: 'einfach-lecker-logo.webp',
      animation: 'fade-right',
      github: 'https://github.com/ScriptScout',
      live: 'https://einfach-lecker.com'
    },
    {
      name: 'Einfach Backen',
      technologies: 'Shopify | Liquid | JavaScript | HTML | CSS',
      description: 'Shopify-Entwicklung für den Backshop von Einfach Backen. Skalierung, Ladezeiten-Optimierung und Conversion-Verbesserung.',
      image: 'einfach-backen.webp',
      animation: 'fade-left',
      github: 'https://github.com/ScriptScout',
      live: 'https://shop.einfachbacken.de'
    },
    {
      name: 'Food.netz – E-Commerce Plattform für den Food-Sektor',
      technologies: 'Shopify | Liquid | WordPress | WooCommerce',
      description: 'Entwicklung und Optimierung der Food.netz-Plattform zur besseren Vernetzung im Food-Sektor. Technische Betreuung und Skalierung.',
      image: 'food.netz.png',
      animation: 'fade-right',
      github: 'https://github.com/ScriptScout',
      live: 'https://foodnetz.de/'
    },
    {
      name: 'Power System Shopify-Store',
      technologies: 'Shopify | Liquid | JavaScript',
      description: 'Technische Umsetzung des Power System Shopify-Shops. Verbesserte Benutzerführung, Performance-Optimierung und Implementierung individueller Features.',
      image: 'power-system-shop.webp',
      animation: 'fade-left',
      github: 'https://github.com/ScriptScout',
      live: 'https://power-system-shop.com'
    },
    {
      name: 'WinAtFashion - Affiliate Marketing Integration',
      technologies: 'Shopify | Liquid | JavaScript | API',
      description: 'Integration einer Affiliate-Marketing-App in den Shopify-Store von WinAtFashion. Anpassung des Trackings und Optimierung der Partner-Programme.',
      image: 'winatfashion.jpg',
      animation: 'fade-right',
      github: 'https://github.com/ScriptScout',
      live: 'https://winatfashion.de/'
    },
    {
      name: 'Giavinci – Personalisierte Wandbilder',
      technologies: 'Shopify | Liquid | JavaScript | Design-Optimierung',
      description: 'Konzeption, Redesign und Implementierung des Shopify-Shops für personalisierte Wandbilder. Fokus auf UI/UX, Conversion-Optimierung und technischer Umsetzung.',
      image: 'giavinci.webp',
      animation: 'fade-left',
      github: 'https://github.com/ScriptScout',
      live: 'https://giavinci.com'
    },
    {
      name: 'Knabemalz Online-Shop (Krombacher)',
      technologies: 'Shopify | IT-Projektmanagement | Performance-Optimierung',
      description: 'Technische Umsetzung des Knabemalz Online-Shops für Krombacher. Performance-Optimierung, Anbindung an externe Systeme und Management des Releases.',
      image: 'krombacher.svg',
      animation: 'fade-right',
      github: 'https://github.com/ScriptScout',
      live: 'https://ready2drink.de'
    },
    {
      name: 'Travel-Tiger',
      technologies: 'Shopify | Liquid | JavaScript | UX',
      description: 'Beteiligung an der Entwicklung und Optimierung des Travel-Tiger Shopify-Stores. UI/UX-Optimierung und Performance-Verbesserungen.',
      image: 'travel-tiger.svg',
      animation: 'fade-left',
      github: 'https://github.com/ScriptScout',
      live: 'https://travel-tiger.com'
    },
  ]
}
