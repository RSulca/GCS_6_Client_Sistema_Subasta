import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setData(key, data): void {
    localStorage.setItem(key, data);
  }

  getData(key): any {
    return localStorage.getItem(key);
  }

  removeData(key) {
    localStorage.removeItem(key);
  }
}
