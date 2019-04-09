import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iblog} from './iblog';
import {map} from 'rxjs/operators';
import {Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly url = 'http://localhost:8080/blog/';
  private readonly urlCategory = 'http://localhost:8080/category/';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Iblog[]> {
    return this.http.get<Iblog[]>(this.url);
  }

  create(blog: Partial<Iblog>): Observable<Iblog> {
    return this.http.post<Iblog>(this.url, blog);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateBlog(blog: Iblog): Observable<Iblog> {
    return this.http.patch<Iblog>(`${this.url}${blog.id}`, blog);
  }

  getById(id: number): Observable<Iblog> {
    return this.http.get<Iblog>(`${this.url}/${id}`);
  }
  getListCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.urlCategory);
  }
  getTitle(name: string): Observable<Iblog[]> {
    return this.http.get<Iblog[]>(`${this.url}${name}/title`);
  }
  createCategory(category: Partial<Category>): Observable<Category> {
    return this.http.post<Category>(this.urlCategory, category);
  }
}
