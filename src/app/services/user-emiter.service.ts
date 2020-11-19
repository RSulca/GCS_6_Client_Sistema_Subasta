import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEmiterService {


  private accountSubject$ = new BehaviorSubject<any>(null);
  accountSubjectChanged$ = this.accountSubject$.asObservable();

  private filesSubject$ = new BehaviorSubject<any>(null);
  filesSubjectChanged$ = this.filesSubject$.asObservable();

  private ubigeoSubject$ = new BehaviorSubject<any>(null);
  ubigeoSubjectChanged$ = this.ubigeoSubject$.asObservable();

  private cardSubject$ = new BehaviorSubject<any>(null);
  cardSubjectChanged$ = this.cardSubject$.asObservable();

  constructor() { }

  addAccountInformation(data: any) {
    this.accountSubject$.next(data);
  }

  addFile(file: any) {
    this.filesSubject$.next(file);
  }

  addUbigeoInformation(data: any) {
    this.ubigeoSubject$.next(data);
  }

  addCardInformation(data: any) {
    this.cardSubject$.next(data);
  }

}
