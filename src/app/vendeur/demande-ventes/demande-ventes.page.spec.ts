import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandeVentesPage } from './demande-ventes.page';

describe('DemandeVentesPage', () => {
  let component: DemandeVentesPage;
  let fixture: ComponentFixture<DemandeVentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeVentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandeVentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
