import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DatePipe, JsonPipe, NgForOf} from "@angular/common";
import {ICurrentWeatherData} from "../shared/interfaces/weather.interface";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [
    JsonPipe,
    MatCard,
    MatCardContent,
    MatDivider,
    NgForOf,
    DatePipe
  ],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss'
})
export class WeatherDetailsComponent implements OnChanges {
  @Input() currentWeather!: ICurrentWeatherData;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'CHANGES')
  }
}
