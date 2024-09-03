import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICurrentWeatherDataDTO, IForecastDTO} from "../interfaces/weather.interface";
import {API_KEY, API_URL} from "../config";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) {}

  getCurrentWeatherByCity(city: string): Observable<ICurrentWeatherDataDTO> {
    return this.http
      .get<ICurrentWeatherDataDTO>(`${API_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  }

  getWeatherForecast({lat, lon}: { lat: number; lon: number }): Observable<IForecastDTO> {
    return this.http
      .get<IForecastDTO>(`${API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  }
}
