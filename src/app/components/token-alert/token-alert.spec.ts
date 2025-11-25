import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenAlert } from './token-alert';

describe('TokenAlert', () => {
  let component: TokenAlert;
  let fixture: ComponentFixture<TokenAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
