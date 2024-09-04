import {TestBed} from '@angular/core/testing';

import {WeatherFavoritesService} from './weather-favorites.service';
import {StorageService} from "./storage.service";
import {ICurrentWeatherData} from "../interfaces/weather.interface";

describe('WeatherFavoritesService', () => {
  let service: WeatherFavoritesService;
  const fakeStorageService = jasmine.createSpyObj('fakeStorageService', {}, {
    local: {
      getValue: jasmine.createSpy('getValue'),
      setValue: jasmine.createSpy('getValue'),
    }
  });
  const mockData: ICurrentWeatherData = {
    name: 'name',
    date: '23.02.1995',
    temp: 23.05,
    description: 'desc',
    humidity: 23,
    forecast: []
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: StorageService, useValue: fakeStorageService}
      ]
    });
    service = TestBed.inject(WeatherFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update favorites array and local storage', () => {
    fakeStorageService.local.getValue.and.returnValue([]);

    service.addToFavorites(mockData);

    expect(fakeStorageService.local.setValue).toHaveBeenCalledWith('favorites', [mockData]);
  });

  it('should remove item from favorites array and local storage', () => {
    fakeStorageService.local.getValue.and.returnValue([mockData, {...mockData, name: 'name2'}]);
    service.removeFromFavorites(mockData.name);

    expect(fakeStorageService.local.setValue).toHaveBeenCalledWith('favorites', []);
  });

  it('should return isFavorite stream', (done) => {
    fakeStorageService.local.getValue.and.returnValue([]);

    service.addToFavorites(mockData);

    service.isInFavorites$(mockData.name).subscribe((result) => {
      expect(result).toBeTruthy();
      done();
    });
  });
});
