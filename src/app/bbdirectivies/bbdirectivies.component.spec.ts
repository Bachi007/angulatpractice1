import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbdirectiviesComponent } from './bbdirectivies.component';

describe('BbdirectiviesComponent', () => {
  let component: BbdirectiviesComponent;
  let fixture: ComponentFixture<BbdirectiviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbdirectiviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbdirectiviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
