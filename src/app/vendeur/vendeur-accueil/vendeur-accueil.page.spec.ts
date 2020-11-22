import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendeurAccueilPage } from './vendeur-accueil.page';

describe('VendeurAccueilPage', () => {
  let component: VendeurAccueilPage;
  let fixture: ComponentFixture<VendeurAccueilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurAccueilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendeurAccueilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
