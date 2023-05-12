import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private textNavbar$ = new Subject<string>();

  constructor() { }

  setTextNavbar(mensage: string) {
    return this.textNavbar$.next(mensage);
  }

  getTextNavbar(): Observable<string> {
    return this.textNavbar$.asObservable();
  }
}
