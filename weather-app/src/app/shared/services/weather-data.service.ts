import {Injectable} from '@angular/core';
import {WeatherApiService} from "./weather-api.service";
import {map, Observable, of, switchMap} from "rxjs";
import {ICurrentWeatherData} from "../interfaces/weather.interface";
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private weatherApi: WeatherApiService) {}

  //TODO: move map logic to separate method
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

          return this.weatherApi.getWeatherForecast({lat, lon}).pipe(map((forecastData) => {
            const itemsByDay = _.groupBy(forecastData.list, item => item.dt_txt.slice(0, 10));
            const dataByDay = _.mapValues(itemsByDay, items => ({
              temp_min: _.min(_.map(items, 'main.temp_min')),
              temp_max: _.max(_.map(items, 'main.temp_max')),
              description: items[0].weather[0].main,
            }))

            const [currDay, ...restDays] = Object.keys(dataByDay).map(key => ({dt_txt: key, ...dataByDay[key]}))

            return {name, temp, humidity, description, forecast: restDays, date: currDay.dt_txt};
          }))
        }));
  }
}
