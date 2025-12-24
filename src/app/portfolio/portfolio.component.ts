import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor(private analytics: AngularFireAnalytics) {}

  trackProjectClick(projectName: string, projectUrl: string) {
    this.analytics.logEvent('select_content', {
      content_type: 'portfolio_project',
      item_id: projectName,
      value: 1
    });
  }

  trackExternalLink(linkName: string, destination: string) {
    this.analytics.logEvent('click', {
      event_category: 'outbound_link',
      event_label: linkName,
      value: 1
    });
  }
}
