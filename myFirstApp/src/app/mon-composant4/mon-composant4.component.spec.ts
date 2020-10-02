import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComposant4Component } from './mon-composant4.component';

describe('MonComposant4Component', () => {
  let component: MonComposant4Component;
  let fixture: ComponentFixture<MonComposant4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonComposant4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComposant4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
