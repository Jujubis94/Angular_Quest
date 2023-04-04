import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nasa } from './models/NasaResponse.model';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(public http: HttpClient) {}

  getImageOfTheDay(): Observable<Nasa> {
    return this.http.get<Nasa>('https://api.nasa.gov/planetary/apod?api_key=ENeNtis5kBo58VjC5NljIVwmT9d0WzYAjJL6lBdo');
  }
}
