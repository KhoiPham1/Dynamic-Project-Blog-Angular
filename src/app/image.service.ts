import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly url = 'http://localhost:8080/image/';

  constructor(private http: HttpClient) {
  }

  create(image: any): Observable<any> {
    return this.http.post<any>(this.url, image);
  }

  delete(image: string): Observable<any> {
    return this.http.delete(`${this.url}${image}`);
  }
}
