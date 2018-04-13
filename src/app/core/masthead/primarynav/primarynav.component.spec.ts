import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarynavComponent } from './primarynav.component';

describe('PrimarynavComponent', () => {
  let component: PrimarynavComponent;
  let fixture: ComponentFixture<PrimarynavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarynavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
