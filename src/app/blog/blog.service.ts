import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('assets/blog/posts.json');
  }

  getPost(slug: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`assets/blog/${slug}.json`);
  }
}
