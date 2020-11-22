import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidationHotelPage } from './validation-hotel.page';

describe('ValidationHotelPage', () => {
  let component: ValidationHotelPage;
  let fixture: ComponentFixture<ValidationHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationHotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
