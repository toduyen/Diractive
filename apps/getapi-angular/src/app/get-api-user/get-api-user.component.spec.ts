import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiUserComponent } from './get-api-user.component';

describe('GetApiUserComponent', () => {
  let component: GetApiUserComponent;
  let fixture: ComponentFixture<GetApiUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetApiUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetApiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
