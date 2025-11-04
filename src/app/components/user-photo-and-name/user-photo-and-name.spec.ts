import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotoAndName } from './user-photo-and-name';

describe('UserPhotoAndName', () => {
  let component: UserPhotoAndName;
  let fixture: ComponentFixture<UserPhotoAndName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPhotoAndName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPhotoAndName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
