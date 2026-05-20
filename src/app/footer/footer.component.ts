import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent {
  constructor(public langService: LanguageService) {}
}
