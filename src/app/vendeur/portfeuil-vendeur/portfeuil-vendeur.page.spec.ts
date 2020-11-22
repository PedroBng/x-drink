import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortfeuilVendeurPage } from './portfeuil-vendeur.page';

describe('PortfeuilVendeurPage', () => {
  let component: PortfeuilVendeurPage;
  let fixture: ComponentFixture<PortfeuilVendeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfeuilVendeurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortfeuilVendeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
