import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


const API_URL = 'https://restcountries.com/v3.1/all';

class Country {
  country_name: string;
  capital_city: string;
  currency: string;
  comment: string;

  constructor(country_name: string, capital_city: string, currency: string, comment: string) {
    this.country_name = country_name;
    this.capital_city = capital_city;
    this.currency = currency;
    this.comment = comment;
  }
}

@Component({
  selector: 'app-countries-view',
  templateUrl: './countries-view.component.html',
  styleUrls: ['./countries-view.component.css']
})
export class CountriesViewComponent {

  current_search: string = '';

  countries: Country[] = [];

  countries_copy: Country[] = [];

  constructor(private http: HttpClient) {
  };

  getData(): Observable<any[]> {
    const url = API_URL;
    return this.http.get<any>(url).pipe(
      map(response => {
        return response;
      })
    );
  }

  loadCountriesClick(): void {
    this.getData().subscribe(data => {
      data.forEach(t => {
        var currency_temp = '';
        if (t.currencies) {
          currency_temp = Object.keys(t.currencies)[0];
        }
        var capital_city_temp = '';
        if (t.capital) {
          capital_city_temp = t.capital[0];
        }
        var country: Country = {
          country_name: t.name.common,
          capital_city: capital_city_temp,
          currency: currency_temp,
          comment: ''
        };
        this.countries.push(country);
      })
      this.countries_copy = this.countries;
    })
  }

  printCountries(): void {
    console.log(this.countries);
  }

  search(): void {
    this.countries = this.countries_copy;
    if (this.current_search) {
      this.countries = this.countries.filter(t => t.country_name.toLowerCase().includes(this.current_search.toLowerCase()));
    };
  }
}
