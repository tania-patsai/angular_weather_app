import { TestBed } from '@angular/core/testing';

import { WeatherFavoritesService } from './weather-favorites.service';

describe('WeatherFavoritesService', () => {
  let service: WeatherFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
