import {TestBed} from '@angular/core/testing';

import {getComputedForecastData, WeatherDataService} from './weather-data.service';
import {WeatherApiService} from "./weather-api.service";
import {weatherByCityMock, forecastMock, weatherDetailsMock} from "../constants/spec-mock";
import {of} from "rxjs";

describe('WeatherDataService', () => {
  let service: WeatherDataService;
  const fakeWeatherApiService = jasmine.createSpyObj('fakeWeatherApiService', {
    getCurrentWeatherByCity: of(weatherByCityMock),
    getWeatherForecast: of(forecastMock)
  });


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: WeatherApiService, useValue: fakeWeatherApiService
      }]
    });
    service = TestBed.inject(WeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map data from two apis', (done) => {
    service.searchWeather('Lviv').subscribe(res => {
      expect(res).toEqual(weatherDetailsMock);
      done();
    })
  });


  it('should group and map forecast data by days', () => {
    const result = getComputedForecastData(forecastMock);

    expect(result[1]).toEqual({
      "dt_txt": "2024-09-05",
      "temp_min": 16.87,
      "temp_max": 27.26,
      "description": "Clouds"
    });
  });
});
