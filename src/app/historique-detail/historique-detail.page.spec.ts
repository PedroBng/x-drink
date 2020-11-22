import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoriqueDetailPage } from './historique-detail.page';

describe('HistoriqueDetailPage', () => {
  let component: HistoriqueDetailPage;
  let fixture: ComponentFixture<HistoriqueDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriqueDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
