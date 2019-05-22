import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateFormComponent } from './tempate-form.component';

describe('TempateFormComponent', () => {
  let component: TempateFormComponent;
  let fixture: ComponentFixture<TempateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
