import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Worldwide Weather App';

  countries = [
    {
      name: "Austrailia",
      cities: ["Sydney", "Melbourne"]
    },
    {
      name: "Austria",
      cities: ["Vienna", "Linz"]
    },
    {
      name: "Canada",
      cities: ["Toronto", "Montreal", "Vancouver"]
    },
    {
      name: "China",
      cities: ["Hong Kong", "Shanghai"]
    },
    {
      name: "Czech Republic",
      cities: ["Prague"]
    },
    {
      name: "France",
      cities: ["Paris"]
    },
    {
      name: "Germany",
      cities: ["Berlin", "Munich"]
    },
    {
      name: "Ireland",
      cities: ["Dublin"]
    },
    {
      name: "Italy",
      cities: ["Florence", "Milan", "Rome", "Venice"]
    },
    {
      name: "Japan",
      cities: ["Tokyo"]
    },
    {
      name: "Mexico",
      cities: ["Mexico City"]
    },
    {
      name: "Netherlands",
      cities: ["Amsterdam"]
    },
    {
      name: "Russia",
      cities: ["Moscow"]
    },
    {
      name: "Spain",
      cities: ["Barcelona", "Madrid"]
    },
    {
      name: "Thailand",
      cities: ["Bangkok"]
    },
    {
      name: "Turkey",
      cities: ["Istanbul"]
    },
    {
      name: "United Kingdom",
      cities: ["London", "Oxford", "Liverpool", "Manchester"]
    },
    {
      name: "United States",
      cities: ["New York", "Las Vegas", "Los Angeles", "Miami", "Orlando", "San Francisco"]
    }
  ];

  countryControl: FormControl = new FormControl;
  cityControl: FormControl = new FormControl;
  cities$: any;
  showCard = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.cityControl = new FormControl("");
    this.countryControl = new FormControl("");

    this.cityControl.valueChanges
      .subscribe(value => {
        this.router.navigate([value]);
        this.showCard = true;
      });
    this.cities$ = this.countryControl.valueChanges.pipe(
      map(country => country.cities)
    );

  }

  ngOnDestroy() {
  }
}
