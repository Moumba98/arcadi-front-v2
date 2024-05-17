import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryRaportListComponent } from './veterinary-raport-list.component';

describe('VeterinaryRaportListComponent', () => {
  let component: VeterinaryRaportListComponent;
  let fixture: ComponentFixture<VeterinaryRaportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinaryRaportListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinaryRaportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
