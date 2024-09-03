import {Injectable} from '@angular/core';
import {ICurrentWeatherData} from "../interfaces/weather.interface";
import {StorageService} from "./storage.service";
import {BehaviorSubject, map, Observable, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherFavoritesService {
  private readonly favoritesSub = new BehaviorSubject<ICurrentWeatherData[]>([]);
  private readonly FAVORITES_KEY = 'favorites';

  constructor(private storage: StorageService) {
    this.favoritesSub.next(this.storage.local.getValue<ICurrentWeatherData[]>(this.FAVORITES_KEY) || []);
  }

  get favorites$(): Observable<ICurrentWeatherData[]> {
    return this.favoritesSub.asObservable();
  }

  isInFavorites$(city: string): Observable<boolean> {
    return this.favorites$.pipe(map(arr => !!arr.find(({name}) => name === city)));
  }


  addToFavorites(data: ICurrentWeatherData): void {
    const updated = [...this.favoritesSub.value, data]
    this.updateStorage(updated);
  }

  removeFromFavorites(city: string) {
    const updated = this.favoritesSub.value.filter(({name}) => name !== city);
    this.updateStorage(updated);
  }

  private updateStorage(value: ICurrentWeatherData[]) {
    this.storage.local.setValue(this.FAVORITES_KEY, value);

    this.favoritesSub.next(value);
  }
}
