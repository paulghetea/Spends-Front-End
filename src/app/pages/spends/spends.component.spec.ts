import { User } from './../../models/user';
import { Spend } from './../../models/spend';
import { SpendsService } from './../../services/spends.service';
import { usersService } from './../../services/users.service';
import { GenericServiceService } from './../../services/generic-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendsComponent } from './spends.component';
import { Observable, of } from 'rxjs';

const mockedUsersService:{
  getAll:()=>Observable<User[]>,
  add:()=> Observable<User>
}={
  getAll:()=>of([]),
  add:()=> of(new User)
};

const mockedSpendsService:{
  getAll:()=>Observable<Spend[]>,
  add:()=> Observable<Spend>
}={
  getAll:()=>of([]),
  add:()=> of(new Spend)
};

describe('SpendsComponent', () => {
  let component: SpendsComponent;
  let fixture: ComponentFixture<SpendsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendsComponent ],
      imports:[],
      providers: [{provide: SpendsService, useValue: mockedSpendsService}, {provide: usersService, useValue: mockedUsersService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component Spends', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSpends, getSpends()', () => {
    const getAllSpy = spyOn(mockedSpendsService, 'getAll');
    getAllSpy.and.returnValue(of([]));
    component.getSpends();
    expect(mockedSpendsService.getAll).toHaveBeenCalled();
  });

  it('should call createSpend, createSpend()', () => {
    const getAllSpy = spyOn(mockedSpendsService, 'add');
    getAllSpy.and.returnValue(of(new Spend));
    component.createSpend();
    expect(mockedSpendsService.add).toHaveBeenCalled();
  });

  it('should call getUsers, getUsers()', () => {
    const getAllSpy = spyOn(mockedUsersService, 'getAll');
    getAllSpy.and.returnValue(of([]));
    component.createUser();
    expect(mockedUsersService.getAll).toHaveBeenCalled();
  });

  it('should call createSpend, createSpend()', () => {
    const getAllSpy = spyOn(mockedUsersService, 'add');
    getAllSpy.and.returnValue(of(new User));
    component.createUser();
    expect(mockedUsersService.add).toHaveBeenCalled();
  });


});
