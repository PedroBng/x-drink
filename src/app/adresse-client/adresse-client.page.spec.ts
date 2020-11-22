import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdresseClientPage } from './adresse-client.page';

describe('AdresseClientPage', () => {
  let component: AdresseClientPage;
  let fixture: ComponentFixture<AdresseClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdresseClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
