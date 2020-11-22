import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidationParticulierPage } from './validation-particulier.page';

describe('ValidationParticulierPage', () => {
  let component: ValidationParticulierPage;
  let fixture: ComponentFixture<ValidationParticulierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationParticulierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationParticulierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
