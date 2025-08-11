import { Component, Input } from '@angular/core';
import { IWeatherSummary } from './summary.model';
import { summaryService } from '../summaryService';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary {
  weatherSummaries: IWeatherSummary[] = [];
  constructor(private summaryService: summaryService) {
    // Example data, replace with actual data fetching logic

    this.summaryService.getCurrentWeatherByZIPcode().subscribe((responses) => {
      console.log(responses); // Make sure this is triggered!
      this.weatherSummaries = responses.map((response: any) => ({
        description: response.weather[0].description,
        city: response.name,
        country: response.sys.country,
        temperature: (response.main.temp - 273.15).toFixed(0), // Converting Kelvin to Celsius
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        windSpeed: response.wind.speed,
        iconUrl: response.weather[0].main, // Assuming icon is a part of the response
      }));
    });
  }

  getImageUrl(weather: IWeatherSummary) {
    // Assuming iconUrl is a relative path to the assets folder
    return 'assets/images/' + weather.iconUrl + '.jpeg';
  }
}
