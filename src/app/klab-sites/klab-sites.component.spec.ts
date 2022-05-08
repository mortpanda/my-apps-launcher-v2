import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlabSitesComponent } from './klab-sites.component';

describe('KlabSitesComponent', () => {
  let component: KlabSitesComponent;
  let fixture: ComponentFixture<KlabSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlabSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlabSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
