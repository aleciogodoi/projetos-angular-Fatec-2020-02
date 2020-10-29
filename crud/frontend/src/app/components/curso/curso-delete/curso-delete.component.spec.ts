import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDeleteComponent } from './curso-delete.component';

describe('CursoDeleteComponent', () => {
  let component: CursoDeleteComponent;
  let fixture: ComponentFixture<CursoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
