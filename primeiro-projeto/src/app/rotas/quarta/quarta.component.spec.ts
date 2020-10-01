import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartaComponent } from './quarta.component';

describe('QuartaComponent', () => {
  let component: QuartaComponent;
  let fixture: ComponentFixture<QuartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
