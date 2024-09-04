import {TestBed} from '@angular/core/testing';

import {WeatherApiService} from './weather-api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ICurrentWeatherDataDTO, IForecastDTO} from "../interfaces/weather.interface";
import {API_KEY, API_URL} from "../constants/config";
import {weatherByCityMock, forecastMock} from "../constants/spec-mock";

describe('WeatherApiService', () => {
  let service: WeatherApiService;
  let httpController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(WeatherApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get current weather data by city name', () => {
    service.getCurrentWeatherByCity('Lviv').subscribe((res) => {
      expect(res).toEqual(weatherByCityMock);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${API_URL}/data/2.5/weather?q=Lviv&appid=${API_KEY}&units=metric`,
    });

    req.flush(weatherByCityMock);
  });

  it('should get forecast by coordinates', () => {
    service.getWeatherForecast({lat: 123, lon: 321}).subscribe((res) => {
      expect(res).toEqual(forecastMock);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${API_URL}/data/2.5/forecast?lat=123&lon=321&appid=${API_KEY}&units=metric`,
    });

    req.flush(forecastMock);
  });
});
