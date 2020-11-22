import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptionBarClientPage } from './inscription-bar-client.page';

describe('InscriptionBarClientPage', () => {
  let component: InscriptionBarClientPage;
  let fixture: ComponentFixture<InscriptionBarClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionBarClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionBarClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
