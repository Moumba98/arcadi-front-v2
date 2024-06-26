import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHabitatComponent } from './add-habitat.component';

describe('AddHabitatComponent', () => {
  let component: AddHabitatComponent;
  let fixture: ComponentFixture<AddHabitatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHabitatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
