import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivraisonChoixPage } from './livraison-choix.page';

describe('LivraisonChoixPage', () => {
  let component: LivraisonChoixPage;
  let fixture: ComponentFixture<LivraisonChoixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraisonChoixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivraisonChoixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
