import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  loadstatus:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
}
