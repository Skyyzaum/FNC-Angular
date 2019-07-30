import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExame } from './add.component';

describe('AddComponent', () => {
  let component: AddExame;
  let fixture: ComponentFixture<AddExame>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExame ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
