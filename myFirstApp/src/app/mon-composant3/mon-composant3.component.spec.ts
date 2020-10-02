import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComposant3Component } from './mon-composant3.component';

describe('MonComposant3Component', () => {
  let component: MonComposant3Component;
  let fixture: ComponentFixture<MonComposant3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonComposant3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComposant3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
