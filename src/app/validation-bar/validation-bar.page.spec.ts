import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidationBarPage } from './validation-bar.page';

describe('ValidationBarPage', () => {
  let component: ValidationBarPage;
  let fixture: ComponentFixture<ValidationBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
