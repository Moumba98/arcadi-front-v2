import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeterinaryRaportComponent } from './add-veterinary-raport.component';

describe('AddVeterinaryRaportComponent', () => {
  let component: AddVeterinaryRaportComponent;
  let fixture: ComponentFixture<AddVeterinaryRaportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVeterinaryRaportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVeterinaryRaportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
