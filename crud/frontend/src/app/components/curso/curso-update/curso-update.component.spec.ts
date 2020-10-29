import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoUpdateComponent } from './curso-update.component';

describe('CursoUpdateComponent', () => {
  let component: CursoUpdateComponent;
  let fixture: ComponentFixture<CursoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
