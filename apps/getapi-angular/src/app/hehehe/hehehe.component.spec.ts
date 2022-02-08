import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HEHEHEComponent } from './hehehe.component';

describe('HEHEHEComponent', () => {
  let component: HEHEHEComponent;
  let fixture: ComponentFixture<HEHEHEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HEHEHEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HEHEHEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
