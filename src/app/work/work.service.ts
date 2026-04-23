import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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
  private readonly url = 'assets/work/cases.json';

  constructor(private http: HttpClient) {}

  list(): Observable<WorkCaseItem[]> {
    return this.http.get<WorkCaseItem[]>(this.url);
  }

  getBySlug(slug: string): Observable<WorkCaseItem | undefined> {
    return this.list().pipe(map(list => list.find(c => c.slug === slug)));
  }
}
