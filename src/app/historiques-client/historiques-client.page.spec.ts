import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoriquesClientPage } from './historiques-client.page';

describe('HistoriquesClientPage', () => {
  let component: HistoriquesClientPage;
  let fixture: ComponentFixture<HistoriquesClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquesClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriquesClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
