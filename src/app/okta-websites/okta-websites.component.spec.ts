import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OktaWebsitesComponent } from './okta-websites.component';

describe('OktaWebsitesComponent', () => {
  let component: OktaWebsitesComponent;
  let fixture: ComponentFixture<OktaWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OktaWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OktaWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
