import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalCityWeatherComponent } from './capital-city-weather.component';

describe('CapitalCityWeatherComponent', () => {
  let component: CapitalCityWeatherComponent;
  let fixture: ComponentFixture<CapitalCityWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapitalCityWeatherComponent]
    });
    fixture = TestBed.createComponent(CapitalCityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
