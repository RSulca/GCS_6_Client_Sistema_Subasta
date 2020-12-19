import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';


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

  constructor(private ls: LocalStorageService) {
    this.categorySubject$.next(this.categoryAvailable())
  }

  addCategory(category: any) {
    this.categorySelected = category;
    this.categorySubject$.next(category);
    this.ls.setData('categorySelected', category);
  }

  addFile(files: any) {
    this.filesSubject$.next(files);
    this.ls.setData('productFiles', files);
  }

  addDescription(data: any) {
    this.descriptionSubject$.next(data);
  }

  addShiping(data: any) {
    this.shippingSubject$.next(data);
  }

  private categoryAvailable(): any {
    const category = this.ls.getData('categorySelected');
    if (category) {
      return category;
    } else {
      return null;
    }
  }

}
