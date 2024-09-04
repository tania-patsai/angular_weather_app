import {Component, Input, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe, DecimalPipe, JsonPipe, NgForOf, TitleCasePipe} from "@angular/common";
import {ICurrentWeatherData} from "../shared/interfaces/weather.interface";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {WeatherFavoritesService} from "../shared/services/weather-favorites.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [
    JsonPipe,
    MatCard,
    MatCardContent,
    MatDivider,
    NgForOf,
    DatePipe,
    MatIcon,
    AsyncPipe,
    TitleCasePipe,
    DecimalPipe
  ],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss'
})
export class WeatherDetailsComponent implements OnInit {
  @Input() currentWeather!: ICurrentWeatherData;

  isFavorite$!:Observable<boolean>;
  isFavorite = false;

  constructor(private favoritesService: WeatherFavoritesService) {
  }

  ngOnInit() {
    this.isFavorite$ = this.favoritesService.isInFavorites$(this.currentWeather.name).pipe(tap(v => this.isFavorite = v));
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;

    if (this.isFavorite) {
      this.favoritesService.addToFavorites(this.currentWeather);
    } else {
      this.favoritesService.removeFromFavorites(this.currentWeather.name);
    }
  }
}
