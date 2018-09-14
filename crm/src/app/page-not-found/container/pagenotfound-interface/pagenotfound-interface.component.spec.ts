import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoundInterfaceComponent } from './pagenotfound-interface.component';

describe('PagenotfoundInterfaceComponent', () => {
  let component: PagenotfoundInterfaceComponent;
  let fixture: ComponentFixture<PagenotfoundInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfoundInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoundInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
