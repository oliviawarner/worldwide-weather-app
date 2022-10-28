import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) {}

  //returns weather data based on selected city
  getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0cabcbef29ea56b81f73cbc8a40cca1&units=imperial`;
    //delay 500 in order to show progress loading bar
    return this.http.get(path).pipe(delay(500));
  }

}
