import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWebsitesComponent } from './user-websites.component';

describe('UserWebsitesComponent', () => {
  let component: UserWebsitesComponent;
  let fixture: ComponentFixture<UserWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
