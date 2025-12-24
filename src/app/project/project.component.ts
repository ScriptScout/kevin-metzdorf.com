import { Component } from '@angular/core';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    standalone: false
})
export class ProjectComponent {
  featuredCases: Array<{
    id: string;
    detailsId: string;
    title: string;
    role: string;
    context: string;
    situation: string[];
    responsibility: string[];
    focus: string[];
    outcome: string[];
    testimonial: {
      type: 'note' | 'quote';
      text: string;
      author?: string;
    };
  }> = [
    {
      id: 'latori',
      detailsId: 'case-latori-details',
      title: 'Latori GmbH – Enterprise Shopify Development & Technical Rescue',
      role: 'Senior Shopify Developer & Technical Consultant',
      context: 'Zusammenarbeit mit einer der wenigen Shopify Platinum Partner Agenturen in der DACH-Region. Ich unterstütze das Team als externer Senior Developer bei der Umsetzung anspruchsvoller Enterprise-Features und in kritischen Projektphasen, in denen Codequalität, Performance und saubere Deployments entscheidend sind.',
      situation: [
        'Enterprise-Shopify-Projekte mit hoher Komplexität in PDP, PLP und Cart',
        'Anspruchsvolle Datenstrukturen und wiederverwendbare Komponenten im Theme',
        'Strenge GitHub-Workflows (Feature Branches, Code Reviews) und kontrollierte Staging/Production-Deployments',
        'Hohe Anforderungen an Performance, Stabilität und Wartbarkeit'
      ],
      responsibility: [
        'Entwicklung komplexer Shopify-Frontend-Features (PDP/PLP/Cart)',
        'Aufbau wiederverwendbarer Custom Sections und sauberer Theme-Architekturen',
        'Integration externer APIs und Apps in bestehende Shop-Strukturen',
        'Refactoring zur Skalierung und Wartbarkeit bestehender Komponenten',
        'Technical Rescue: Analyse, Debugging und Stabilisierung in kritischen Phasen'
      ],
      focus: [
        'Liquid',
        'TypeScript',
        'Shopify Theme Architecture',
        'Custom Sections',
        'API-Integration',
        'GitHub Workflows',
        'Code Reviews',
        'Staging/Production Deployments',
        'Performance'
      ],
      outcome: [
        'Stabilere, besser wartbare Theme-Strukturen für langfristige Weiterentwicklung',
        'Wiederverwendbare Komponenten für schnellere Umsetzung neuer Anforderungen',
        'Saubere Integrationen und verlässliche Releases innerhalb kontrollierter Deployments',
        'Technische Stabilisierung in kritischen Phasen ohne unnötigen Overhead'
      ],
      testimonial: {
        type: 'note',
        text: 'Referenzen auf Anfrage.'
      }
    },
    {
      id: 'hsn',
      detailsId: 'case-hsn-details',
      title: 'hsn – die Agentur – Shopify Consulting & Custom Development',
      role: 'Senior Shopify Developer & Technischer Berater',
      context: 'Langjährige Zusammenarbeit mit einer E-Commerce-Agentur, die zahlreiche Shopify-Projekte für unterschiedliche Kunden betreut. Ich unterstütze als technischer Partner bei Analyse, Umsetzung und Übergabe – inklusive direkter Abstimmungen mit Endkunden.',
      situation: [
        'Unterschiedliche Kunden-Setups und Anforderungen je Projekt',
        'Bedarf an schnellen, sauberen Lösungen statt teurem Overengineering',
        'Kombination aus Entwicklung, App-Integrationen und Beratung/Schulung',
        'Hoher Anspruch an Kommunikation, Zuverlässigkeit und repräsentatives Auftreten'
      ],
      responsibility: [
        'Technische Analyse bestehender Shopify-Setups und Ableitung umsetzbarer Maßnahmen',
        'Umsetzung von Custom Features im Theme (Liquid/JS) und gezielte Bugfixes',
        'Integration und Konfiguration relevanter Apps (z. B. Affiliate-/Marketing-Lösungen)',
        'Technische Beratung, klare Einschätzungen und realistische Umsetzungsvorschläge',
        'Schulungen, saubere Übergaben und direkte Abstimmung mit Endkunden'
      ],
      focus: [
        'Shopify Theme Development',
        'Liquid',
        'JavaScript',
        'Custom Features',
        'App-Integration',
        'Bugfixing',
        'Technical Consulting',
        'Stakeholder-Kommunikation'
      ],
      outcome: [
        'Verlässliche Umsetzung technischer Anforderungen innerhalb enger Zeitfenster',
        'Stabilere Shops durch saubere Fixes und wartbare Anpassungen',
        'Effiziente App-Integrationen ohne unnötige Individualentwicklung',
        'Hohe Kundenzufriedenheit durch klare Kommunikation und strukturierte Übergaben'
      ],
      testimonial: {
        type: 'quote',
        text: `„Kevin ist ein sehr professioneller und kompetenter Developer, der aktiv mitdenkt und proaktiv arbeitet.
Die Zusammenarbeit ist stets freundlich, zielführend und fachlich hervorragend. Deadlines werden eingehalten,
die Kommunikation ist umsichtig, das Auftreten repräsentativ, sodass er auch vor Kunden einen sehr guten Eindruck hinterlässt.“`,
        author: '— René Rasmußen, Key Account Manager, hsn – die Agentur'
      }
    },
    {
      id: 'dekoback',
      detailsId: 'case-dekoback-details',
      title: 'Dekoback GmbH – Multi-Shop Shopify Architektur (7 Stores)',
      role: 'Senior Shopify Developer & Technical Consultant',
      context: 'Technische Betreuung und Weiterentwicklung eines High-Traffic Multi-Store-Systems mit sieben Shopify-Shops. Fokus auf stabile Theme-Architektur, saubere Features, Performance und zuverlässige Betriebsprozesse – über mehrere Stores hinweg.',
      situation: [
        'Multi-Store-Setup mit sieben Shopify-Shops und unterschiedlichen Anforderungen',
        'Gewachsene Theme-Strukturen, die skalierbar und wartbar bleiben müssen',
        'Performance- und Stabilitätsanforderungen bei hohem Traffic',
        'Laufende Feature-Anforderungen, Debugging und App-/Tool-Integrationen',
        'Bedarf an transparenten Prozessen und nachvollziehbarem Zeittracking'
      ],
      responsibility: [
        'Weiterentwicklung und Stabilisierung bestehender Theme-Architekturen (Refactoring)',
        'Entwicklung neuer Features mit Liquid/JavaScript und sauberen Datenstrukturen',
        'Performance-Optimierung, Debugging und technische Qualitätssicherung',
        'Verantwortung für Tracking-Setups und Integrationen (GA4, GTM)',
        'App-Integrationen sowie technische Beratung für kontinuierliche Optimierung'
      ],
      focus: [
        'Multi-Store Management',
        'Liquid',
        'JavaScript',
        'Theme Refactoring',
        'Performance',
        'GA4',
        'Google Tag Manager',
        'App-Integration',
        'Code Quality'
      ],
      outcome: [
        'Stabiler Betrieb und zuverlässige Weiterentwicklung über mehrere Shops hinweg',
        'Wartbare Theme-Strukturen für langfristige Skalierung und schnellere Anpassungen',
        'Verbesserte Performance und reduzierte Fehleranfälligkeit durch gezielte Optimierung',
        'Saubere Tracking- und Integrationsbasis für datengetriebene Entscheidungen'
      ],
      testimonial: {
        type: 'quote',
        text: `„Zuverlässiger Shopify-Experte & Webpartner. Kevin Metzdorf betreut zuverlässig unsere sieben Shopify-Shops,
darunter Influencer-Shops mit hohem Traffic. Die Zusammenarbeit ist effizient, transparent und lösungsorientiert.
Besonders schätzen wir sein proaktives Vorgehen, schnelle Reaktionen und die saubere technische Umsetzung.“`,
        author: '— Ralf Pressler, Director Marketing & Digital, Dekoback GmbH'
      }
    }
  ];

  additionalProjects: Array<{
      title: string;
      role: string;
      description: string;
      tech: string[];
  }> = [
    {
      title: 'Hubert Burda Media – EinfachBacken',
      role: 'Shopify Frontend Developer',
      description: 'Frontend-Entwicklung eines individuellen Shopify-Themes für einen der reichweitenstärksten Food-Publisher im deutschsprachigen Raum. Technische Umsetzung responsiver Designs, Anpassung von HTML, CSS und Liquid-Templates sowie Integration externer Schnittstellen.',
      tech: ['Liquid', 'HTML', 'CSS', 'Shopify Theme Development']
    },
    {
      title: 'Rocketcommerce.io – Custom Shopify Solutions',
      role: 'Senior Shopify Developer',
      description: 'Entwicklung individueller Shopify-Features, u. a. Produktkonfiguratoren mit komplexen Preis- und Variantenlogiken sowie performanter Liquid-/JavaScript-Architektur.',
      tech: ['Liquid', 'JavaScript', 'Custom Sections']
    },
    {
      title: 'Giavinci',
      role: 'Shopify Developer & Consultant',
      description: 'Neuaufbau eines Shopify-Stores inklusive Theme-Anpassungen, Beratung zur App-Integration und technischer Unterstützung nach dem Launch.',
      tech: ['Shopify', 'Theme Customization', 'App-Integration']
    },
    {
      title: 'Winat Fashion',
      role: 'Shopify Developer',
      description: 'Integration einer Affiliate-Marketing-Lösung sowie Umsetzung von „Shop-the-Look“-Funktionen im bestehenden Shopify-Theme.',
      tech: ['Shopify', 'Affiliate-Integration', 'Theme Customization']
    },
    {
      title: 'Power System Shop',
      role: 'Shopify Developer & Technical Consultant',
      description: 'Technische Analyse des bestehenden Shops, Bugfixing und gezielte Feature-Erweiterungen zur Stabilisierung und Weiterentwicklung.',
      tech: ['Shopify', 'Bugfixing', 'Custom Features']
    },
    {
      title: 'Rimoco – Gewürzmanufaktur',
      role: 'Shopify Consultant',
      description: 'Beratung zur Migration von Shopware zu Shopify, technische Anpassungen sowie Setup von Tracking- und Marketing-Tools.',
      tech: ['Shopify', 'GA4', 'GTM', 'Tracking Setup']
    },
    {
      title: 'Golf24',
      role: 'Technischer Berater',
      description: 'Beratung und technische Unterstützung bei der Integration von Xentral-ERP in eine bestehende E-Commerce-Struktur.',
      tech: ['ERP-Integration', 'Schnittstellen', 'E-Commerce']
    }
  ];
}
