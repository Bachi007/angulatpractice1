import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbstudentsComponent } from './bbstudents.component';

describe('BbstudentsComponent', () => {
  let component: BbstudentsComponent;
  let fixture: ComponentFixture<BbstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
