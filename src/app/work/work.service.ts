import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LanguageService } from '../language.service';

export interface WorkCaseSection {
  type: 'context' | 'approach' | 'implementation' | 'results' | 'learnings' | string;
  text: string;
}

export interface WorkCaseItem {
  slug: string;
  title: string;
  summary: string;
  kpis: string[];
  industry?: string;
  region?: string;
  heroImage?: string;
  sections: WorkCaseSection[];
}

@Injectable({ providedIn: 'root' })
export class WorkService {
  constructor(
    private http: HttpClient,
    private langService: LanguageService
  ) {}

  list(): Observable<WorkCaseItem[]> {
    const url = `assets/work/cases-${this.langService.currentLang}.json`;
    return this.http.get<WorkCaseItem[]>(url);
  }

  getBySlug(slug: string): Observable<WorkCaseItem | undefined> {
    return this.list().pipe(map(list => list.find(c => c.slug === slug)));
  }
}
