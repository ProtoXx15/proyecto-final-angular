import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private _http = inject(HttpClient);
  private urlBase: string = `https://random.dog/woof.json`;
  private urlDog: string = '';
  getDog(): Observable<any> {
    return this._http.get(this.urlBase);
  }
  processDog(data: any): any {
    this.urlDog = data.url;
    return this.urlDog;
  }
  constructor() { }
}
