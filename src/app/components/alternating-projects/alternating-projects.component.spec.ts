import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternatingProjectsComponent } from './alternating-projects.component';

describe('AlternatingProjectsComponent', () => {
  let component: AlternatingProjectsComponent;
  let fixture: ComponentFixture<AlternatingProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlternatingProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlternatingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
