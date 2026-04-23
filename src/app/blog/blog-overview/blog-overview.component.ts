import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from '../blog.service';
import { BlogPost } from '../blog.model';
import { SeoService } from '../../seo.service';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
  standalone: false
})
export class BlogOverviewComponent implements OnInit, OnDestroy {
  posts: BlogPost[] = [];
  loading = true;
  currentLang = 'de';
  private langSub!: Subscription;

  constructor(
    private blogService: BlogService,
    private seo: SeoService,
    public langService: LanguageService
  ) {}

  loc(de: string, en?: string): string {
    return this.currentLang === 'en' && en ? en : de;
  }

  ngOnInit(): void {
    this.langSub = this.langService.lang$.subscribe(lang => this.currentLang = lang);

    this.seo.update({
      title: 'Blog – Shopify Tipps & Insights | Kevin Metzdorf',
      description: 'Praxisnahe Artikel zu Shopify Development, Performance-Optimierung, Migrations und Technical Rescue. Geschrieben von Senior Shopify Developer Kevin Metzdorf.',
      canonical: 'https://kevin-metzdorf.com/blog'
    });

    this.blogService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  formatDate(dateStr: string): string {
    const locale = this.currentLang === 'en' ? 'en-GB' : 'de-DE';
    return new Date(dateStr).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
