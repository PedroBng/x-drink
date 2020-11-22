import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortfeuilLivreurPage } from './portfeuil-livreur.page';

describe('PortfeuilLivreurPage', () => {
  let component: PortfeuilLivreurPage;
  let fixture: ComponentFixture<PortfeuilLivreurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfeuilLivreurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortfeuilLivreurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
