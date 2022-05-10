import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectAppsComponent } from './my-project-apps.component';

describe('MyProjectAppsComponent', () => {
  let component: MyProjectAppsComponent;
  let fixture: ComponentFixture<MyProjectAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProjectAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
