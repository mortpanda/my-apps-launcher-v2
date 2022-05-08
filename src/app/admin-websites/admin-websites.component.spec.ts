import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWebsitesComponent } from './admin-websites.component';

describe('AdminWebsitesComponent', () => {
  let component: AdminWebsitesComponent;
  let fixture: ComponentFixture<AdminWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
