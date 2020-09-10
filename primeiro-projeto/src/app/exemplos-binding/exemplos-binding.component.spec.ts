import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosBindingComponent } from './exemplos-binding.component';

describe('ExemplosBindingComponent', () => {
  let component: ExemplosBindingComponent;
  let fixture: ComponentFixture<ExemplosBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplosBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplosBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
