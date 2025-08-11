import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class summaryService {
  constructor(private http: HttpClient) {}

  getCurrentWeatherByZIPcode(): Observable<any> {
    const requests: Observable<any>[] = [
      this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Bangalore,IN&appid=532c57c5edad83e9d001dfb47c6e71ce'
      ),
      this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Kaiserslautern,DE&appid=532c57c5edad83e9d001dfb47c6e71ce'
      ),
      this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Sydney,AU&appid=532c57c5edad83e9d001dfb47c6e71ce'
      ),
      this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=532c57c5edad83e9d001dfb47c6e71ce'
      ),
      this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?zip=10001,us&appid=532c57c5edad83e9d001dfb47c6e71ce'
      ),
      this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?zip=94103,us&appid=532c57c5edad83e9d001dfb47c6e71ce'
      ),
      this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?zip=60601,us&appid=532c57c5edad83e9d001dfb47c6e71ce'
      ),
      this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?q=London,GB&appid=532c57c5edad83e9d001dfb47c6e71ce'
      ),
      this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=532c57c5edad83e9d001dfb47c6e71ce'
      ),
    ];

    return forkJoin(requests);
  }
}
