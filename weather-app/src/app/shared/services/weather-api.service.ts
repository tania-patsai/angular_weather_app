import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICurrentWeatherDataDTO, IForecastDTO} from "../interfaces/weather.interface";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private readonly API_KEY = '5149f6624574fe005b375b92d75e64bb';
  private readonly API_KEY2 = 'e6044db9d5a98273a43661b1467bfb5d';
  private readonly API_URL = 'http://api.openweathermap.org';

  constructor(private http: HttpClient) {}

  getCurrentWeatherByCity(city: string): Observable<ICurrentWeatherDataDTO> {
    return this.http
      .get<ICurrentWeatherDataDTO>(`${this.API_URL}/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=metric`)
  }

  getWeatherForecast({lat, lon}: { lat: number; lon: number }): Observable<IForecastDTO> {
    return this.http
      .get<IForecastDTO>(`${this.API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric`)
  }
}
