import {Component, OnInit} from '@angular/core';
import {WeatherDetailsComponent} from "../weather-details/weather-details.component";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {
  catchError,
  debounceTime,
  Observable,
  of,
  switchMap,
  tap
} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {WeatherDataService} from "../shared/services/weather-data.service";
import {ICurrentWeatherData} from "../shared/interfaces/weather.interface";

@Component({
  selector: 'app-weather-home',
  standalone: true,
  imports: [
    WeatherDetailsComponent,
    MatFormField,
    MatIcon,
    MatInput,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    AsyncPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.scss'
})
export class WeatherHomeComponent implements OnInit {
  details: ICurrentWeatherData | null = null;
  loading = true;

  readonly searchControl = new FormControl<string>('', {nonNullable: true});

  constructor(private weatherDataService: WeatherDataService) {
  }

  ngOnInit(): void {
    this.watchInputChanges();
  }


  private watchInputChanges(): void {
    //TODO: add takeUntil
    this.searchControl.valueChanges.pipe(
      tap(() => this.loading = true),
      debounceTime(500),
      switchMap((value: string) => this.filter(value)),
    ).subscribe();
  }

  private filter(cityName: string): Observable<any | null> {
    return this.weatherDataService.searchWeather(cityName).pipe(
      catchError(({error}) => {
        const errMap = new Map<string, string>([['404', 'invalidCity'], ['400', 'empty']]);
        const key = errMap.get(error.cod) || 'serverErr';

        this.searchControl.setErrors({[key]: true});

        return of(null);
      }),
      tap(details => {
        this.details = details;
        this.loading = false
      }),
    );
  }
}
