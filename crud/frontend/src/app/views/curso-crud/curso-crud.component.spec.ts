import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCrudComponent } from './curso-crud.component';

describe('CursoCrudComponent', () => {
  let component: CursoCrudComponent;
  let fixture: ComponentFixture<CursoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
