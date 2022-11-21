import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbfooterComponent } from './bbfooter.component';

describe('BbfooterComponent', () => {
  let component: BbfooterComponent;
  let fixture: ComponentFixture<BbfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
