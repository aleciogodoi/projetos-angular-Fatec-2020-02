import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroComponent } from './terceiro.component';

describe('TerceiroComponent', () => {
  let component: TerceiroComponent;
  let fixture: ComponentFixture<TerceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
