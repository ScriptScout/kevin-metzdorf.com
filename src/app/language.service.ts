import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

export type Lang = 'de' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly STORAGE_KEY = 'lang';
  private readonly DEFAULT_LANG: Lang = 'de';

  private langSubject: BehaviorSubject<Lang>;
  lang$;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.langSubject = new BehaviorSubject<Lang>(this.getInitialLang());
    this.lang$ = this.langSubject.asObservable();

    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');
    translate.use(this.langSubject.value);
  }

  get currentLang(): Lang {
    return this.langSubject.value;
  }

  setLang(lang: Lang): void {
    this.langSubject.next(lang);
    this.translate.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, lang);
    }
  }

  toggle(): void {
    this.setLang(this.currentLang === 'de' ? 'en' : 'de');
  }

  private getInitialLang(): Lang {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.STORAGE_KEY) as Lang | null;
      if (stored === 'de' || stored === 'en') return stored;
      const browser = navigator.language?.substring(0, 2).toLowerCase();
      return browser === 'en' ? 'en' : this.DEFAULT_LANG;
    }
    return this.DEFAULT_LANG;
  }
}
