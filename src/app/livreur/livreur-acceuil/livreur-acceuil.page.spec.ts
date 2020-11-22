import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivreurAcceuilPage } from './livreur-acceuil.page';

describe('LivreurAcceuilPage', () => {
  let component: LivreurAcceuilPage;
  let fixture: ComponentFixture<LivreurAcceuilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreurAcceuilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivreurAcceuilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
