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

  constructor(private summaryService: summaryService) {}

  ngOnInit() {
    console.log('AppComponent initialized');
    /* this.summaryService.getCurrentWeatherByZIPcode().subscribe(data => {
      console.log(data);
    });*/
  }

  // Function to toggle the visibility of the input field pop-up
  toggleInput(): void {
    this.zipcode = '';  // Clear the input value
    this.isInputVisible = !this.isInputVisible;
  }

  // Function to handle input submission
  submitInput(): void {
    console.log('Input submitted:', this.zipcode);
    this.toggleInput(); // Hide the input field after submission
  }
}
