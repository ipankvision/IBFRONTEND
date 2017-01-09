/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailrekeningComponent } from './detailrekening.component';

describe('DetailrekeningComponent', () => {
  let component: DetailrekeningComponent;
  let fixture: ComponentFixture<DetailrekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailrekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailrekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
