import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendeurProfilePage } from './vendeur-profile.page';

describe('VendeurProfilePage', () => {
  let component: VendeurProfilePage;
  let fixture: ComponentFixture<VendeurProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendeurProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
