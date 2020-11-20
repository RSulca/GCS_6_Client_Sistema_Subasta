import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ProductEmiterService {

  categorySelected: any = '';

  private categorySubject$ = new BehaviorSubject<any>(null);
  categorySubjectChanged$ = this.categorySubject$.asObservable();

  private filesSubject$ = new BehaviorSubject<any>(null);
  filesSubjectChanged$ = this.filesSubject$.asObservable();

  private descriptionSubject$ = new BehaviorSubject<any>(null);
  descriptionSubjectChanged$ = this.descriptionSubject$.asObservable();

  private shippingSubject$ = new BehaviorSubject<any>(null);
  shippingSubjectChanged$ = this.shippingSubject$.asObservable();

  constructor() { }

  addCategory(category: any) {
    this.categorySelected = category;
    this.categorySubject$.next(category);
  }

  addFile(file: any) {
    this.filesSubject$.next(file);
  }

  addDescription(data: any) {
    this.descriptionSubject$.next(data);
  }

  addShiping(data: any) {
    this.shippingSubject$.next(data);
  }

}
