import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierProduitPanierPage } from './modifier-produit-panier.page';

describe('ModifierProduitPanierPage', () => {
  let component: ModifierProduitPanierPage;
  let fixture: ComponentFixture<ModifierProduitPanierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierProduitPanierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierProduitPanierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
