import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class summaryService {
  constructor(private http: HttpClient) {}

  getCurrentWeatherByZIPcode(): Observable<any> {
    let result: any;

    /* result = 'https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}'; */

    result = this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=532c57c5edad83e9d001dfb47c6e71ce'
    );
    return result;
  }
}
