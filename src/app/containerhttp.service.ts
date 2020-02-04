import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Container} from './container';

@Injectable({
  providedIn: 'root'
})
export class ContainerhttpService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://www.mocky.io/v2/5ddbad8a3400005200eadd4a?numer=';
  getContainer(id: string): Observable<Container> {
    return this.http.get<Container>(this.apiUrl + id);
  }
}
