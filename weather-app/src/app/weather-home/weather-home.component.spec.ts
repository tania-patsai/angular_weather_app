import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {WeatherHomeComponent} from './weather-home.component';
import {of} from "rxjs";
import {WeatherDataService} from "../shared/services/weather-data.service";
import {weatherDetailsMock} from "../shared/constants/spec-mock";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('WeatherHomeComponent', () => {
  let component: WeatherHomeComponent;
  let fixture: ComponentFixture<WeatherHomeComponent>;
  const fakeWeatherDataService = jasmine.createSpyObj('fakeWeatherDataService', {
    searchWeather: of(weatherDetailsMock)
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherHomeComponent, BrowserAnimationsModule],
      providers: [{provide: WeatherDataService, useValue: fakeWeatherDataService}]

    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should listen to input changes and search city', fakeAsync(() => {
    component.searchControl.patchValue('Lviv');

    fixture.detectChanges();
    tick(500);

    expect(component.details).toEqual(weatherDetailsMock);
  }));
});
