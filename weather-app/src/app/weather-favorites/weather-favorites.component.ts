import {Component, OnInit} from '@angular/core';
import {WeatherFavoritesService} from "../shared/services/weather-favorites.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {ICurrentWeatherData} from "../shared/interfaces/weather.interface";
import {WeatherDetailsComponent} from "../weather-details/weather-details.component";

@Component({
  selector: 'app-weather-favorites',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    WeatherDetailsComponent
  ],
  templateUrl: './weather-favorites.component.html',
  styleUrl: './weather-favorites.component.scss'
})
export class WeatherFavoritesComponent implements OnInit {
  favorites$!: Observable<ICurrentWeatherData[]>;

  constructor(private favoritesService: WeatherFavoritesService) {}

  ngOnInit() {
    this.favorites$ = this.favoritesService.favorites$;
  }
}
