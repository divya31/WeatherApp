import { Component } from '@angular/core';
import { summaryService } from '../summaryService';
import { Summary } from '../summary/summary';
import { IWeatherSummary } from '../summary/summary.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private summaryService: summaryService) {}

  isInputVisible = false; // Flag to toggle the visibility of the input field
  zipcode: string = ''; // Variable to store the entered value
  isCelsius: boolean = true; // State for Celsius or Fahrenheit
  selectedCountryCode: string = ''; // Variable to store the selected country
  weatherSummaries: IWeatherSummary[] = []; // Array to hold weather summaries

  //outletComponent: any = null; // Variable to store the dynamic component

  // List of countries with their 2-letter country code
  countries = [
    { country: 'Afghanistan', code: 'AF' },
    { country: 'Albania', code: 'AL' },
    { country: 'Algeria', code: 'DZ' },
    { country: 'Andorra', code: 'AD' },
    { country: 'Angola', code: 'AO' },
    { country: 'Antigua and Barbuda', code: 'AG' },
    { country: 'Argentina', code: 'AR' },
    { country: 'Armenia', code: 'AM' },
    { country: 'Australia', code: 'AU' },
    { country: 'Austria', code: 'AT' },
    { country: 'Azerbaijan', code: 'AZ' },
    { country: 'Bahamas', code: 'BS' },
    { country: 'Bahrain', code: 'BH' },
    { country: 'Bangladesh', code: 'BD' },
    { country: 'Barbados', code: 'BB' },
    { country: 'Belarus', code: 'BY' },
    { country: 'Belgium', code: 'BE' },
    { country: 'Belize', code: 'BZ' },
    { country: 'Benin', code: 'BJ' },
    { country: 'Bhutan', code: 'BT' },
    { country: 'Bolivia', code: 'BO' },
    { country: 'Bosnia and Herzegovina', code: 'BA' },
    { country: 'Botswana', code: 'BW' },
    { country: 'Brazil', code: 'BR' },
    { country: 'Brunei Darussalam', code: 'BN' },
    { country: 'Bulgaria', code: 'BG' },
    { country: 'Burkina Faso', code: 'BF' },
    { country: 'Burundi', code: 'BI' },
    { country: 'Cabo Verde', code: 'CV' },
    { country: 'Cambodia', code: 'KH' },
    { country: 'Cameroon', code: 'CM' },
    { country: 'Canada', code: 'CA' },
    { country: 'Central African Republic', code: 'CF' },
    { country: 'Chad', code: 'TD' },
    { country: 'Chile', code: 'CL' },
    { country: 'China', code: 'CN' },
    { country: 'Colombia', code: 'CO' },
    { country: 'Comoros', code: 'KM' },
    { country: 'Congo (Congo-Brazzaville)', code: 'CG' },
    { country: 'Congo (Democratic Republic of the Congo)', code: 'CD' },
    { country: 'Costa Rica', code: 'CR' },
    { country: 'Croatia', code: 'HR' },
    { country: 'Cuba', code: 'CU' },
    { country: 'Cyprus', code: 'CY' },
    { country: 'Czechia (Czech Republic)', code: 'CZ' },
    { country: 'Denmark', code: 'DK' },
    { country: 'Djibouti', code: 'DJ' },
    { country: 'Dominica', code: 'DM' },
    { country: 'Dominican Republic', code: 'DO' },
    { country: 'Ecuador', code: 'EC' },
    { country: 'Egypt', code: 'EG' },
    { country: 'El Salvador', code: 'SV' },
    { country: 'Equatorial Guinea', code: 'GQ' },
    { country: 'Eritrea', code: 'ER' },
    { country: 'Estonia', code: 'EE' },
    { country: 'Eswatini (fmr. "Swaziland")', code: 'SZ' },
    { country: 'Ethiopia', code: 'ET' },
    { country: 'Fiji', code: 'FJ' },
    { country: 'Finland', code: 'FI' },
    { country: 'France', code: 'FR' },
    { country: 'Gabon', code: 'GA' },
    { country: 'Gambia', code: 'GM' },
    { country: 'Georgia', code: 'GE' },
    { country: 'Germany', code: 'DE' },
    { country: 'Ghana', code: 'GH' },
    { country: 'Greece', code: 'GR' },
    { country: 'Grenada', code: 'GD' },
    { country: 'Guatemala', code: 'GT' },
    { country: 'Guinea', code: 'GN' },
    { country: 'Guinea-Bissau', code: 'GW' },
    { country: 'Guyana', code: 'GY' },
    { country: 'Haiti', code: 'HT' },
    { country: 'Honduras', code: 'HN' },
    { country: 'Hungary', code: 'HU' },
    { country: 'Iceland', code: 'IS' },
    { country: 'India', code: 'IN' },
    { country: 'Indonesia', code: 'ID' },
    { country: 'Iran', code: 'IR' },
    { country: 'Iraq', code: 'IQ' },
    { country: 'Ireland', code: 'IE' },
    { country: 'Israel', code: 'IL' },
    { country: 'Italy', code: 'IT' },
    { country: 'Jamaica', code: 'JM' },
    { country: 'Japan', code: 'JP' },
    { country: 'Jordan', code: 'JO' },
    { country: 'Kazakhstan', code: 'KZ' },
    { country: 'Kenya', code: 'KE' },
    { country: 'Kiribati', code: 'KI' },
    { country: 'Korea (North)', code: 'KP' },
    { country: 'Korea (South)', code: 'KR' },
    { country: 'Kuwait', code: 'KW' },
    { country: 'Kyrgyzstan', code: 'KG' },
    { country: 'Laos', code: 'LA' },
    { country: 'Latvia', code: 'LV' },
    { country: 'Lebanon', code: 'LB' },
    { country: 'Lesotho', code: 'LS' },
    { country: 'Liberia', code: 'LR' },
    { country: 'Libya', code: 'LY' },
    { country: 'Liechtenstein', code: 'LI' },
    { country: 'Lithuania', code: 'LT' },
    { country: 'Luxembourg', code: 'LU' },
    { country: 'Madagascar', code: 'MG' },
    { country: 'Malawi', code: 'MW' },
    { country: 'Malaysia', code: 'MY' },
    { country: 'Maldives', code: 'MV' },
    { country: 'Mali', code: 'ML' },
    { country: 'Malta', code: 'MT' },
    { country: 'Marshall Islands', code: 'MH' },
    { country: 'Mauritania', code: 'MR' },
    { country: 'Mauritius', code: 'MU' },
    { country: 'Mexico', code: 'MX' },
    { country: 'Micronesia', code: 'FM' },
    { country: 'Moldova', code: 'MD' },
    { country: 'Monaco', code: 'MC' },
    { country: 'Mongolia', code: 'MN' },
    { country: 'Montenegro', code: 'ME' },
    { country: 'Morocco', code: 'MA' },
    { country: 'Mozambique', code: 'MZ' },
    { country: 'Myanmar (formerly Burma)', code: 'MM' },
    { country: 'Namibia', code: 'NA' },
    { country: 'Nauru', code: 'NR' },
    { country: 'Nepal', code: 'NP' },
    { country: 'Netherlands', code: 'NL' },
    { country: 'New Zealand', code: 'NZ' },
    { country: 'Nicaragua', code: 'NI' },
    { country: 'Niger', code: 'NE' },
    { country: 'Nigeria', code: 'NG' },
    { country: 'North Macedonia (formerly Macedonia)', code: 'MK' },
    { country: 'Norway', code: 'NO' },
    { country: 'Oman', code: 'OM' },
    { country: 'Pakistan', code: 'PK' },
    { country: 'Palau', code: 'PW' },
    { country: 'Panama', code: 'PA' },
    { country: 'Papua New Guinea', code: 'PG' },
    { country: 'Paraguay', code: 'PY' },
    { country: 'Peru', code: 'PE' },
    { country: 'Philippines', code: 'PH' },
    { country: 'Poland', code: 'PL' },
    { country: 'Portugal', code: 'PT' },
    { country: 'Qatar', code: 'QA' },
    { country: 'Romania', code: 'RO' },
    { country: 'Russia', code: 'RU' },
    { country: 'Rwanda', code: 'RW' },
    { country: 'Saint Kitts and Nevis', code: 'KN' },
    { country: 'Saint Lucia', code: 'LC' },
    { country: 'Saint Vincent and the Grenadines', code: 'VC' },
    { country: 'Samoa', code: 'WS' },
    { country: 'San Marino', code: 'SM' },
    { country: 'Sao Tome and Principe', code: 'ST' },
    { country: 'Saudi Arabia', code: 'SA' },
    { country: 'Senegal', code: 'SN' },
    { country: 'Serbia', code: 'RS' },
    { country: 'Seychelles', code: 'SC' },
    { country: 'Sierra Leone', code: 'SL' },
    { country: 'Singapore', code: 'SG' },
    { country: 'Slovakia', code: 'SK' },
    { country: 'Slovenia', code: 'SI' },
    { country: 'Solomon Islands', code: 'SB' },
    { country: 'Somalia', code: 'SO' },
    { country: 'South Africa', code: 'ZA' },
    { country: 'South Korea', code: 'KR' },
    { country: 'South Sudan', code: 'SS' },
    { country: 'Spain', code: 'ES' },
    { country: 'Sri Lanka', code: 'LK' },
    { country: 'Sudan', code: 'SD' },
    { country: 'Suriname', code: 'SR' },
    { country: 'Sweden', code: 'SE' },
    { country: 'Switzerland', code: 'CH' },
    { country: 'Syria', code: 'SY' },
    { country: 'Taiwan', code: 'TW' },
    { country: 'Tajikistan', code: 'TJ' },
    { country: 'Tanzania', code: 'TZ' },
    { country: 'Thailand', code: 'TH' },
    { country: 'Timor-Leste', code: 'TL' },
    { country: 'Togo', code: 'TG' },
    { country: 'Tonga', code: 'TO' },
    { country: 'Trinidad and Tobago', code: 'TT' },
    { country: 'Tunisia', code: 'TN' },
    { country: 'Turkey', code: 'TR' },
    { country: 'Turkmenistan', code: 'TM' },
    { country: 'Tuvalu', code: 'TV' },
    { country: 'Uganda', code: 'UG' },
    { country: 'Ukraine', code: 'UA' },
    { country: 'United Arab Emirates', code: 'AE' },
    { country: 'United Kingdom', code: 'GB' },
    { country: 'United States of America', code: 'US' },
    { country: 'Uruguay', code: 'UY' },
    { country: 'Uzbekistan', code: 'UZ' },
    { country: 'Vanuatu', code: 'VU' },
    { country: 'Vatican City', code: 'VA' },
    { country: 'Venezuela', code: 'VE' },
    { country: 'Vietnam', code: 'VN' },
    { country: 'Yemen', code: 'YE' },
    { country: 'Zambia', code: 'ZM' },
    { country: 'Zimbabwe', code: 'ZW' },
  ];

  // Function to toggle the visibility of the input field pop-up
  toggleInput(): void {
    this.zipcode = ''; // Clear the input value
    this.selectedCountryCode = ''; // Clear the selected country code
    this.isInputVisible = !this.isInputVisible;
  }

  // Function to handle input submission
  submitInput(): void {
    console.log('Input submitted:', this.zipcode);
    this.getWeatherByZipCodeAndCountry();
    // Dynamically set the component to load
    //this.outletComponent = Summary;
    this.toggleInput(); // Hide the input field after submission
  }

  // Toggle between Celsius and Fahrenheit
  toggleUnit() {
    this.isCelsius = !this.isCelsius;
  }

  getWeatherByZipCodeAndCountry(): void{
    if (this.zipcode && this.selectedCountryCode) {
      this.summaryService
        .getCurrentWeatherByZIPcode(this.zipcode, this.selectedCountryCode)
        .subscribe((weather) => {
          console.log('Weather data for ZIP code:', weather);
          // Add the fetched weather data to the weather summaries
          this.weatherSummaries.push({
            description: weather.weather[0].description,
            city: weather.name,
            country: weather.sys.country,
            temperature: parseFloat((weather.main.temp - 273.15).toFixed()),
            humidity: weather.main.humidity,
            pressure: weather.main.pressure,
            windSpeed: weather.wind.speed,
            iconUrl: weather.weather[0].main,
          });
        });
    }
    
  }
}
