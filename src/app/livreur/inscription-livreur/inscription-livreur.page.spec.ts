import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptionLivreurPage } from './inscription-livreur.page';

describe('InscriptionLivreurPage', () => {
  let component: InscriptionLivreurPage;
  let fixture: ComponentFixture<InscriptionLivreurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionLivreurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionLivreurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
