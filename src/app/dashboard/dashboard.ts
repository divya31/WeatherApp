import { Component } from '@angular/core';
import { summaryService } from '../summaryService';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  isInputVisible = false; // Flag to toggle the visibility of the input field
  zipcode: string = ''; // Variable to store the entered value
  weatherSummaries: any;

  constructor(private summaryService: summaryService) {}

  ngOnInit() {
    console.log('AppComponent initialized');
    this.summaryService.getCurrentWeatherByZIPcode().subscribe((responses) => {
      console.log(responses); // Make sure this is triggered!
      this.weatherSummaries = responses
        .map((response: any) => {
          return response.weather.map((item: any) => ({
            description: item.description,
            city: response.name,
            country: response.sys.country,
            temperature: (response.main.temp - 273.15).toFixed(),
            humidity: response.main.humidity,
            pressure: response.main.pressure,
            windSpeed: response.wind.speed,
            iconUrl: item.main + '.jpeg',
          }));
        })
        .flat(); // Flatten if each response has an array of weather items
    });
  }

  // Function to toggle the visibility of the input field pop-up
  toggleInput(): void {
    this.zipcode = ''; // Clear the input value
    this.isInputVisible = !this.isInputVisible;
  }

  // Function to handle input submission
  submitInput(): void {
    console.log('Input submitted:', this.zipcode);
    this.toggleInput(); // Hide the input field after submission
  }
  isCelsius: boolean = true; // State for Celsius or Fahrenheit
  temperatureCelsius: number = 25; // Temperature in Celsius

  // Toggle between Celsius and Fahrenheit
  toggleUnit() {
    this.isCelsius = !this.isCelsius;
  }
  
}
