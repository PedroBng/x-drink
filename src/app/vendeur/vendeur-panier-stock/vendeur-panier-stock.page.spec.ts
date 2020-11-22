import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendeurPanierStockPage } from './vendeur-panier-stock.page';

describe('VendeurPanierStockPage', () => {
  let component: VendeurPanierStockPage;
  let fixture: ComponentFixture<VendeurPanierStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurPanierStockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendeurPanierStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
