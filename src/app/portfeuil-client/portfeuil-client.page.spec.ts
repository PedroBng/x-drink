import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortfeuilClientPage } from './portfeuil-client.page';

describe('PortfeuilClientPage', () => {
  let component: PortfeuilClientPage;
  let fixture: ComponentFixture<PortfeuilClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfeuilClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortfeuilClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
