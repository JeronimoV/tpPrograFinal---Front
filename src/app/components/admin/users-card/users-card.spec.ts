import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCard } from './users-card';

describe('UsersCard', () => {
  let component: UsersCard;
  let fixture: ComponentFixture<UsersCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
