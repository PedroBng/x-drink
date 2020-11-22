import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendeurStockPage } from './vendeur-stock.page';

describe('VendeurStockPage', () => {
  let component: VendeurStockPage;
  let fixture: ComponentFixture<VendeurStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurStockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendeurStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
