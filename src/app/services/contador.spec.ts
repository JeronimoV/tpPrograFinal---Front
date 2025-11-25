import { TestBed } from '@angular/core/testing';

import { Contador } from './contador';

describe('Contador', () => {
  let service: Contador;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Contador);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
