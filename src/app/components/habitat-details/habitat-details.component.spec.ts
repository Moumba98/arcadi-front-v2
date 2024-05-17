import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatDetailsComponent } from './habitat-details.component';

describe('HabitatDetailsComponent', () => {
  let component: HabitatDetailsComponent;
  let fixture: ComponentFixture<HabitatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabitatDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
