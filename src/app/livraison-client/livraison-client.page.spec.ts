import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivraisonClientPage } from './livraison-client.page';

describe('LivraisonClientPage', () => {
  let component: LivraisonClientPage;
  let fixture: ComponentFixture<LivraisonClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraisonClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivraisonClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
