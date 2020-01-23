import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Container} from './container';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public apiHost = 'http://www.mocky.io/v2/5ddbad8a3400005200eadd4a?numer';

  constructor(private http: HttpClient) {
  }

  getContainer(numberId: Container): Observable<Container> {
    return this.http.get<Container>(`${this.apiHost}=${numberId}` );
  }

}
