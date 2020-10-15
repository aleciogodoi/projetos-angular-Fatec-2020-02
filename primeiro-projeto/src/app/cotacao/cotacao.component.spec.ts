import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoComponent } from './cotacao.component';

describe('CotacaoComponent', () => {
  let component: CotacaoComponent;
  let fixture: ComponentFixture<CotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
