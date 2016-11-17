import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

@Injectable()
export class ContactService {

  private url: string = 'https://randomuser.me/api/';

  constructor(private http: Http) { }

  public getAll() {
    let params = new URLSearchParams();
    params.set('nat', 'fr');
    params.set('results', '10');
    params.set('seed', 'addressbook');

    return this.http
      .get(this.url, {search: params})
      .map(res => res.json().results);
  }

  public get(i: number) {
    return this.getAll()
      .map(res => {
        res = res[i];
        res.name.last = res.name.last.charAt(0).toUpperCase() + res.name.last.slice(1);
        res.name.first = res.name.first.charAt(0).toUpperCase() + res.name.first.slice(1);
        return res;
      })
  }
}
