import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendeurCataloguePage } from './vendeur-catalogue.page';

describe('VendeurCataloguePage', () => {
  let component: VendeurCataloguePage;
  let fixture: ComponentFixture<VendeurCataloguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurCataloguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendeurCataloguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
