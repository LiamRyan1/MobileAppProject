import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuedatePage } from './duedate.page';

describe('DuedatePage', () => {
  let component: DuedatePage;
  let fixture: ComponentFixture<DuedatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DuedatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
