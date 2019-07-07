import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorDetailsComponent } from './operador-details.component';

describe('OperadorDetailsComponent', () => {
  let component: OperadorDetailsComponent;
  let fixture: ComponentFixture<OperadorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
