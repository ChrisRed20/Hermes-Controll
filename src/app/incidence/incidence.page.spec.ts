import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidencePage } from './incidence.page';

describe('IncidencePage', () => {
  let component: IncidencePage;
  let fixture: ComponentFixture<IncidencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
