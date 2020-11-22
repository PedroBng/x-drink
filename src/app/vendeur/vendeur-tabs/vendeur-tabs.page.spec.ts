import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendeurTabsPage } from './vendeur-tabs.page';

describe('VendeurTabsPage', () => {
  let component: VendeurTabsPage;
  let fixture: ComponentFixture<VendeurTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendeurTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
