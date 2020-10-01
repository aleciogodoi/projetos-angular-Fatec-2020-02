import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaComponent } from './segunda.component';

describe('SegundaComponent', () => {
  let component: SegundaComponent;
  let fixture: ComponentFixture<SegundaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
