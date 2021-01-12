import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormModalPage } from './form-modal.page';

describe('FormModalPage', () => {
  let component: FormModalPage;
  let fixture: ComponentFixture<FormModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
