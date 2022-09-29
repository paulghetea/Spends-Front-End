import { of } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GenericServiceService } from './generic-service.service';

describe('GenericServiceService', () => {
  let service: GenericServiceService<Object>;
  let httpClientSpyGet: { get: jasmine.Spy};
  beforeEach(() => {
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GenericServiceService, { provide: "url", useValue: 'mockUrl' }]
    });
    service = TestBed.inject(GenericServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
/*
  it('should return expected object (HttpClient called once)', () => {
    //Mock
    const expectedSpend = [
    {
      "id": 1,
      "description": "Dinner",
      "user":{},
      "userId": 2,
      "cost" : 400,
      "date": ""
    },
    {
      "id": 2,
      "description": "Test",
      "user":{},
      "userId": 1,
      "cost" : 1,
      "date": ""
    }
  ]

    httpClientSpyGet.get.and.returnValue(of(expectedSpend));

    service.getAll();

    expect(service.getAll.length).toBe(2);
    expect(service.getAll[0]['description']).toEqual('Dinner');
  });
*/

});
