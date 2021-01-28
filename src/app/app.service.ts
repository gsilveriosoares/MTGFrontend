import { Cards } from './cards';
import { Observable } from 'rxjs/Observable';
import { take, delay, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'http://localhost:8080/cards'

  constructor(private http: HttpClient) { }

   list(): Observable<Cards[]> {
    return this.http.get<Cards[]>(this.url);
  };


}
