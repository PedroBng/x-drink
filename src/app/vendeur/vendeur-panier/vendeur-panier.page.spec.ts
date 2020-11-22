import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendeurPanierPage } from './vendeur-panier.page';

describe('VendeurPanierPage', () => {
  let component: VendeurPanierPage;
  let fixture: ComponentFixture<VendeurPanierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurPanierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendeurPanierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
