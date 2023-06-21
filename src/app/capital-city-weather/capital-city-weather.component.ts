import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const API_URL_COUNTRIES = 'https://restcountries.com/v3.1/all';
const API_URL_WEATHER = 'https://api.open-meteo.com/v1/forecast';

class CapitalCity {
  country_name: string;
  city_name: string;
  latitude: number;
  longitude: number;

  constructor(country_name: string, city_name: string, latitude: number, longitude: number) {
    this.country_name = country_name;
    this.city_name = city_name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

class WeatherRecord {
  
  capital_city: string;
  temperature: number;
  country_name: string;

  constructor(capital_city: string, temperature: number, country_name: string) {
    this.capital_city = capital_city;
    this.temperature = temperature;
    this.country_name = country_name;
  }
}


@Component({
  selector: 'app-capital-city-weather',
  templateUrl: './capital-city-weather.component.html',
  styleUrls: ['./capital-city-weather.component.css']
})

export class CapitalCityWeatherComponent {
  
  cities: CapitalCity[] = [];
  weather_records: WeatherRecord[] = [];
  current_search: string = '';

  constructor(private http: HttpClient, ) { };
  

  getDataForCities(): Observable<any[]> {
    const url = API_URL_COUNTRIES;
    return this.http.get<any>(url).pipe(
      map(response => {
        return response;
      })
    );
  }

  loadCities(): void {
    this.getDataForCities().subscribe(data => {
      data.forEach(t => {
        if (t.capital) {
          var capital_city: CapitalCity = {
            city_name: t.capital[0],
            country_name: t.name.common,
            latitude: t.latlng[0],
            longitude: t.latlng[1],
          };
          this.cities.push(capital_city);
        };
      })
    })
    console.log(this.cities);
  }

  ngOnInit() {
    this.loadCities();
  }

  search() {

    var city: CapitalCity[] = this.cities.filter(t => t.city_name.toLowerCase() === (this.current_search.toLowerCase()));

    if (city.length > 0) {
      var longitude: number = city[0].longitude;
      var latitude: number = city[0].latitude;
      this.getWeather(longitude, latitude).subscribe(data => {
        var weather_record: WeatherRecord = {
          capital_city: city[0].city_name,
          temperature: data.current_weather.temperature,
          country_name: city[0].country_name,
        }
        this.weather_records.push(weather_record);
      })
    } else {
      alert("City does not exist");
    }
  }

  getWeather(longitude: number, latitude: number) {
    const url = API_URL_WEATHER + "?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true";
    console.log(url);
    return this.http.get<any>(url).pipe(
      map(response => {
        return response;
      })
    );
  }

  deleteItem(item: WeatherRecord): void {
    if (confirm("Are you sure to delete " + item.country_name)) {
      this.weather_records = this.weather_records.filter(i => i !== item);
    }
  }
}

