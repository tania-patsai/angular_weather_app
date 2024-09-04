import {Injectable} from '@angular/core';
import {WeatherApiService} from "./weather-api.service";
import {map, Observable, of, switchMap, tap} from "rxjs";
import {ICurrentWeatherData, IForecastDTO} from "../interfaces/weather.interface";
import _ from 'lodash';

export const getComputedForecastData = (forecastData: IForecastDTO): {
  temp_min: number;
  dt_txt: string;
  description: string;
  temp_max: number;
}[] => {
  const itemsByDay = _.groupBy(forecastData.list, item => item.dt_txt.slice(0, 10));

  const dataByDays = _.mapValues(itemsByDay, items => ({
    temp_min: _.min(_.map(items, 'main.temp_min')),
    temp_max: _.max(_.map(items, 'main.temp_max')),
    description: items[0].weather[0].main,
  }));

  return Object.keys(dataByDays).map(key => ({dt_txt: key, ...dataByDays[key]}));
}

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  constructor(private weatherApi: WeatherApiService) {
  }

  searchWeather(city: string): Observable<ICurrentWeatherData> {
    return this.weatherApi.getCurrentWeatherByCity(city)
      .pipe(
        switchMap(({
                     name,
                     main: {temp, humidity},
                     weather: [{description}],
                     coord
                   }) => {
          const {lat, lon} = coord;

          return this.weatherApi.getWeatherForecast({
            lat,
            lon
          }).pipe(
            map((forecastData) => {
              const [currDay, ...restDays] = getComputedForecastData(forecastData);

              return {name, temp, humidity, description, forecast: restDays, date: currDay.dt_txt};
            }),
          )
        }));
  }
}
