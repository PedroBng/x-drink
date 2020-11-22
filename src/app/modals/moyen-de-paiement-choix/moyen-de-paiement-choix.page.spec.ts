import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoyenDePaiementChoixPage } from './moyen-de-paiement-choix.page';

describe('MoyenDePaiementChoixPage', () => {
  let component: MoyenDePaiementChoixPage;
  let fixture: ComponentFixture<MoyenDePaiementChoixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoyenDePaiementChoixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoyenDePaiementChoixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
