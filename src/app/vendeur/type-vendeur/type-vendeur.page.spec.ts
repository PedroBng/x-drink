import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypeVendeurPage } from './type-vendeur.page';

describe('TypeVendeurPage', () => {
  let component: TypeVendeurPage;
  let fixture: ComponentFixture<TypeVendeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeVendeurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypeVendeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
