import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistributeurAgreePage } from './distributeur-agree.page';

describe('DistributeurAgreePage', () => {
  let component: DistributeurAgreePage;
  let fixture: ComponentFixture<DistributeurAgreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributeurAgreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistributeurAgreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
