import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./weather-home/weather-home.component').then(mod => mod.WeatherHomeComponent)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./weather-favorites/weather-favorites.component').then(mod => mod.WeatherFavoritesComponent)
  },
];
