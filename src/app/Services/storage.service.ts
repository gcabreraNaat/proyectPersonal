import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor() { }

clearAll() {
  sessionStorage.clear();
  localStorage.clear();
}



}
