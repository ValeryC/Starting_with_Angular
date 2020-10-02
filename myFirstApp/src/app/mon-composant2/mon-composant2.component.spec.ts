import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComposant2Component } from './mon-composant2.component';

describe('MonComposant2Component', () => {
  let component: MonComposant2Component;
  let fixture: ComponentFixture<MonComposant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonComposant2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComposant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
