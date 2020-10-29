import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoReadComponent } from './curso-read.component';

describe('CursoReadComponent', () => {
  let component: CursoReadComponent;
  let fixture: ComponentFixture<CursoReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
