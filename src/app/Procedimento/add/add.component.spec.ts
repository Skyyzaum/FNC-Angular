import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcedimento } from './add.component';

describe('AddProcedimento', () => {
  let component: AddProcedimento;
  let fixture: ComponentFixture<AddProcedimento>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcedimento ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcedimento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
