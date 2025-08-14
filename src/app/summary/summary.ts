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
  @Input() weather!: IWeatherSummary;
  @Input() unit: string = 'Celsius'; // Get the unit from parent (Celsius or Fahrenheit)

  weatherSummaries: IWeatherSummary[] = [];

  getImageUrl(weather: IWeatherSummary) {
    // Assuming iconUrl is a relative path to the assets folder
    return 'assets/images/' + weather.iconUrl + '.jpeg';
  }

  removeWeatherSummary(weather: IWeatherSummary) {
    this.weatherSummaries = this.weatherSummaries.filter((w) => w !== weather);
  }

  // Method to convert temperature based on the unit
  convertTemperature(temp: number): number {
    if (this.unit === 'Celsius') {
      return temp; // Celsius
    } else {
      return (temp * 9) / 5 + 32; // Fahrenheit
    }
  }
}
