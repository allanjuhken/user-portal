import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TokenReaderComponent } from './token-reader/token-reader.component';
import { UserViewComponent } from './user-view/user-view.component';
import { CountriesViewComponent } from './countries-view/countries-view.component';
import { CapitalCityWeatherComponent } from './capital-city-weather/capital-city-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    TokenReaderComponent,
    UserViewComponent,
    CountriesViewComponent,
    CapitalCityWeatherComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
