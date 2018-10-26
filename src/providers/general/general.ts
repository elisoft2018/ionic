import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEURL } from '../../shared/baseUrl';


/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GeneralProvider Provider');
  }

  
  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(BASEURL+endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(BASEURL + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(BASEURL+ endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(BASEURL+endpoint, body, reqOpts);
  }
  get(endpoint: string) {
    return this.http.get(BASEURL+endpoint);
  }

}
