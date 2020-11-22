import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivreurTabsPage } from './livreur-tabs.page';

describe('LivreurTabsPage', () => {
  let component: LivreurTabsPage;
  let fixture: ComponentFixture<LivreurTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreurTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivreurTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
