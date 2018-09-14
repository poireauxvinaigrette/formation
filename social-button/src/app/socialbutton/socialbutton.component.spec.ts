import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialbuttonComponent } from './socialbutton.component';

describe('SocialbuttonComponent', () => {
  let component: SocialbuttonComponent;
  let fixture: ComponentFixture<SocialbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
