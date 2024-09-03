import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFavoritesComponent } from './weather-favorites.component';

describe('WeatherFavoritesComponent', () => {
  let component: WeatherFavoritesComponent;
  let fixture: ComponentFixture<WeatherFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherFavoritesComponent]
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
