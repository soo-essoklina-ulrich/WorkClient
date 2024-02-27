import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   private apiKey = '34efdca1daebac4c86dffd5e1889c73a';
  constructor(
    private http: HttpClient
  ) { }

  getWeatherByCity(city: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);
  }
}
