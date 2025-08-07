import { Component, Input } from '@angular/core';
import { IWeatherSummary } from './summary.model';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary {
  weatherSummaries: IWeatherSummary[];

  constructor() {
    // Example data, replace with actual data fetching logic
    this.weatherSummaries = [
      {
        city: 'New York',
        country: 'USA',
        temperature: 22,
        humidity: 60,
        pressure: 1012,
        windSpeed: 5,
        description: 'Sunny',
        iconUrl: 'sunny.jpeg',
      },
      {
        city: 'London',
        country: 'UK',
        temperature: 15,
        humidity: 80,
        pressure: 1008,
        windSpeed: 3,
        description: 'Cloudy',
        iconUrl: 'cloudy.jpeg',
      },
      {
        city: 'Tokyo',
        country: 'Japan',
        temperature: 25,
        humidity: 50,
        pressure: 1015,
        windSpeed: 4,
        description: 'Partly cloudy',
        iconUrl: 'partly_cloudy.jpeg',
      },
      {
        city: 'Sydney',
        country: 'Australia',
        temperature: 30,
        humidity: 40,
        pressure: 1010,
        windSpeed: 6,
        description: 'Raining',
        iconUrl: 'raining.jpeg',
      },
      {
        city: 'Cape Town',
        country: 'South Africa',
        temperature: 18,
        humidity: 70,
        pressure: 1011,
        windSpeed: 2,
        description: 'Windy',
        iconUrl: 'windy.jpeg',
      },
      {
        city: 'Moscow',
        country: 'Russia',
        temperature: -5,
        humidity: 90,
        pressure: 1020,
        windSpeed: 1,
        description: 'Snowy',
        iconUrl: 'snowy.jpeg',
      },
    ];
  }

  getImageUrl(weather:IWeatherSummary){
    // Assuming iconUrl is a relative path to the assets folder
    return '/assets/images/' + weather.iconUrl;
  }
  
}
