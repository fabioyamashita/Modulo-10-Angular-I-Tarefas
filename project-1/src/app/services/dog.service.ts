import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import Dog from '../models/Dog';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = 'http://localhost:3000/';
  protected baseUrl: string = this.UrlServiceV1 + 'dogs';

  protected httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.baseUrl);
  }

  postDogs(newDog: Dog): Observable<Dog> {
    if (newDog.headerImg == '')
      newDog.headerImg =
        'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80';

    if (newDog.srcImg == '')
      newDog.srcImg =
        'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80';

    return this.http.post<Dog>(this.baseUrl, newDog, this.httpOptions);
  }

  deleteDog(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  updateDog(id: number, updatedData: Dog): Observable<Dog> {
    return this.http.put<Dog>(
      `${this.baseUrl}/${id}`,
      updatedData,
      this.httpOptions
    );
  }
}
