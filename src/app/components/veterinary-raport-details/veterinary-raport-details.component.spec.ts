import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryRaportDetailsComponent } from './veterinary-raport-details.component';

describe('VeterinaryRaportDetailsComponent', () => {
  let component: VeterinaryRaportDetailsComponent;
  let fixture: ComponentFixture<VeterinaryRaportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinaryRaportDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinaryRaportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
