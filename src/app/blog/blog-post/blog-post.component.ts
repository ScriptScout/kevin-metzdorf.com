import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from '../blog.service';
import { BlogPost, ContentSection } from '../blog.model';
import { SeoService } from '../../seo.service';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  standalone: false
})
export class BlogPostComponent implements OnInit, OnDestroy {
  post: BlogPost | null = null;
  loading = true;
  notFound = false;
  currentLang = 'de';
  private langSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private seo: SeoService,
    public langService: LanguageService
  ) {}

  get localTitle(): string {
    return this.currentLang === 'en' && this.post?.title_en ? this.post.title_en : (this.post?.title ?? '');
  }

  get localDescription(): string {
    return this.currentLang === 'en' && this.post?.description_en ? this.post.description_en : (this.post?.description ?? '');
  }

  get localContent(): ContentSection[] {
    return (this.currentLang === 'en' && this.post?.content_en ? this.post.content_en : this.post?.content) ?? [];
  }

  ngOnInit(): void {
    this.langSub = this.langService.lang$.subscribe(lang => this.currentLang = lang);

    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.loading = true;
      this.notFound = false;

      this.blogService.getPost(slug).subscribe({
        next: (post) => {
          this.post = post;
          this.loading = false;
          this.seo.update({
            title: `${post.title} | Kevin Metzdorf Blog`,
            description: post.description,
            canonical: `https://kevin-metzdorf.com/blog/${post.slug}`
          });
        },
        error: () => {
          this.loading = false;
          this.notFound = true;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  formatDate(dateStr: string): string {
    const locale = this.currentLang === 'en' ? 'en-GB' : 'de-DE';
    return new Date(dateStr).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }
}
