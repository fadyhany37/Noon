import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarifyemailComponent } from './varifyemail.component';

describe('VarifyemailComponent', () => {
  let component: VarifyemailComponent;
  let fixture: ComponentFixture<VarifyemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarifyemailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarifyemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
