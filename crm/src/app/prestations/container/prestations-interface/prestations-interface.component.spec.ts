import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsInterfaceComponent } from './prestations-interface.component';

describe('PrestationsInterfaceComponent', () => {
  let component: PrestationsInterfaceComponent;
  let fixture: ComponentFixture<PrestationsInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestationsInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
