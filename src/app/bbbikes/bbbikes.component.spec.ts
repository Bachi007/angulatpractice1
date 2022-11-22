import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbbikesComponent } from './bbbikes.component';

describe('BbbikesComponent', () => {
  let component: BbbikesComponent;
  let fixture: ComponentFixture<BbbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbbikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
