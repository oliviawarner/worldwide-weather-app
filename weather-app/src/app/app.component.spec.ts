import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Worldwide Weather App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Worldwide Weather App');
  });

  it('should create country dropdown', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.countryControl).toBeTruthy();
  });

  it('should create city dropdown', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cityControl).toBeTruthy();
  });

  it('should populate countries in country dropdown', () => {
    var mockCountriesArr = [
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
    ]
    expect(mockCountriesArr).toEqual([
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
    ]);
  });
});
