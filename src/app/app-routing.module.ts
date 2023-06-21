import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';
import { UserViewComponent } from './user-view/user-view.component';
import { TokenReaderComponent } from './token-reader/token-reader.component';
import { CountriesViewComponent } from './countries-view/countries-view.component';
import { CapitalCityWeatherComponent } from './capital-city-weather/capital-city-weather.component';


const routes: Routes = [
  { path: 'UserFormComponent', component: UserFormComponent },
  { path: 'UserViewComponent', component: UserViewComponent },
  { path: 'TokenReaderComponent', component: TokenReaderComponent },
  { path: 'CountriesViewComponent', component: CountriesViewComponent },
  { path: 'CapitalCityWeatherComponent', component: CapitalCityWeatherComponent },
  // Add more routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }


