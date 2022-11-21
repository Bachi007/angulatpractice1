import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbbodyComponent } from './bbbody.component';

describe('BbbodyComponent', () => {
  let component: BbbodyComponent;
  let fixture: ComponentFixture<BbbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
