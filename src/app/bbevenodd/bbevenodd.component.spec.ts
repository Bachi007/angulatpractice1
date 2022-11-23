import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbevenoddComponent } from './bbevenodd.component';

describe('BbevenoddComponent', () => {
  let component: BbevenoddComponent;
  let fixture: ComponentFixture<BbevenoddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbevenoddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbevenoddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
