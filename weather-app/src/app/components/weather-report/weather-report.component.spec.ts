import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WeatherReportComponent } from './weather-report.component';

describe('WeatherReportComponent', () => {
  let component: WeatherReportComponent;
  let fixture: ComponentFixture<WeatherReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ WeatherReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.clock().install();
  });

  it('should create weather report component', () => {
    expect(component).toBeTruthy();
  });

  it('should equal current date', () => {
    const todayMock = new Date();
    jasmine.clock().mockDate(todayMock);
    expect(component.today).toEqual(todayMock);
  });

  it('should be initialized to false', () => {
    expect(component.showProgressBar).toEqual(false);
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

});
