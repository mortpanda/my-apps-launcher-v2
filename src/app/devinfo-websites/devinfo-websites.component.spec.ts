import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevinfoWebsitesComponent } from './devinfo-websites.component';

describe('DevinfoWebsitesComponent', () => {
  let component: DevinfoWebsitesComponent;
  let fixture: ComponentFixture<DevinfoWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevinfoWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevinfoWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
