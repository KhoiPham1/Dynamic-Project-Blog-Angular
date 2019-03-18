import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iblog} from './iblog';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly url = 'http://localhost:8080/blog/';

  constructor(private http: HttpClient) {
  }

  getList(count = -1): Observable<Iblog[]> {
    return this.http.get<Iblog[]>(this.url).pipe(
      map(data => data.filter((post, i) => i > count))
    );
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
}
