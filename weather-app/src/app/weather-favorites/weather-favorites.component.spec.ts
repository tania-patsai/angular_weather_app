import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherFavoritesComponent} from './weather-favorites.component';
import {of} from "rxjs";
import {WeatherFavoritesService} from "../shared/services/weather-favorites.service";

describe('WeatherFavoritesComponent', () => {
  let component: WeatherFavoritesComponent;
  let fixture: ComponentFixture<WeatherFavoritesComponent>;

  const fakeWeatherFavoritesService = jasmine.createSpyObj('fakeWeatherFavoritesService', [], {
    favorites$: of([])
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherFavoritesComponent],
      providers: [{provide: WeatherFavoritesService, useValue: fakeWeatherFavoritesService}]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
