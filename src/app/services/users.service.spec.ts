
import { usersService } from './users.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { inject } from '@angular/core';

let mockUrl = "" as const;
describe('UsersService', () => {
  let service: usersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [usersService, HttpClient, HttpHandler]
    });
    service = TestBed.inject(usersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
