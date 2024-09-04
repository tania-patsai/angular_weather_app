import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherDetailsComponent} from './weather-details.component';
import {WeatherFavoritesService} from "../shared/services/weather-favorites.service";
import {weatherDetailsMock} from "../shared/constants/spec-mock";
import {of} from "rxjs";

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;
  const fakeWeatherFavoritesService = jasmine.createSpyObj('fakeWeatherFavoritesService', {
    addToFavorites: null,
    removeFromFavorites: null,
    isInFavorites$: of(true)
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDetailsComponent],
      providers: [{provide: WeatherFavoritesService, useValue: fakeWeatherFavoritesService}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    component.currentWeather = weatherDetailsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isFavorite to false and call addToFavorites', () => {
    component.isFavorite = false;
    component.toggleFavorite();
    expect(component.isFavorite).toBeTruthy();
    expect(fakeWeatherFavoritesService.addToFavorites).toHaveBeenCalled();
  });

  it('should set isFavorite to true and call removeFromFavorites', () => {
    component.isFavorite = true;
    component.toggleFavorite();
    expect(component.isFavorite).toBeFalsy();
    expect(fakeWeatherFavoritesService.removeFromFavorites).toHaveBeenCalled();
  });
});
