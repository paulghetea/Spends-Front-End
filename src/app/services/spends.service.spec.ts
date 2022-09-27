import { GenericServiceService } from './generic-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable } from 'rxjs';
import { Spend } from './../models/spend';
import { TestBed } from '@angular/core/testing';

import { SpendsService } from './spends.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';


describe('SpendsService', () => {
  let service: SpendsService;
  let httpClientSpyPost: { post: jasmine.Spy};
  let httpClientSpyGet: { get: jasmine.Spy};

  beforeEach(() => {
    httpClientSpyPost = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SpendsService]
    });
    service = TestBed.inject(SpendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
  it('should return new object (add)', (done: DoneFn) => {
    //Mocking

    let spend = new Spend;
    spend.id = 1;
    spend.description = 'Dinner';
    spend.userId = 2;
    spend.cost = 400;
    spend.date = new Date ;

    const spendResult = new Array(spend);

    httpClientSpy.post.and.returnValue(of(spend));

    service.getAll()
      .subscribe(result => {
        expect(result).toEqual(spendResult)
        done()
      })

  });

  it('should return expected users (HttpClient called once)', () => {
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
