import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbheaderComponent } from './bbheader.component';

describe('BbheaderComponent', () => {
  let component: BbheaderComponent;
  let fixture: ComponentFixture<BbheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
