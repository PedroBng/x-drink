import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepotMarchandPage } from './depot-marchand.page';

describe('DepotMarchandPage', () => {
  let component: DepotMarchandPage;
  let fixture: ComponentFixture<DepotMarchandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotMarchandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepotMarchandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
