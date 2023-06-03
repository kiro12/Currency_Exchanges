import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private baseUrl = environment.apiUrl
  private apiKey = environment.apiKey
  currencies:any[] = [];
  popularCurrencies= new BehaviorSubject<any>({});
  constructor(private http: HttpClient) {}

  getCurrencies( base:string  , symbols:string[] | string ): any {
    return this.http.get<any>(`${this.baseUrl}/latest?access_key=${this.apiKey}${base ? `&base=${base}` : ''}${symbols ? `&symbols=${symbols}` : ''}`).pipe(
      map((response: any) => {
        return response;
      }));
  }
  getSymbols( ): any {
    return this.http.get<any>(`${this.baseUrl}/symbols?access_key=${this.apiKey}`).pipe(
      map((response: any) => {
        return response;
      }));
  }
  getHistoricalRates( date:string , base:string , symbols:string[] | string ): any {
    return this.http.get<any>(`${this.baseUrl}/${date}?access_key=${this.apiKey}${base ? `&base=${base}` : ''}${symbols ? `&symbols=${symbols}` : ''}`).pipe(
      map((response: any) => {
        return response;
      }));
  }
  // convertCurrencies( from:string , to:string , amount:number ): any {
  //   return this.http.get<any>(`${this.baseUrl}/convert?access_key=${this.apiKey}&from=${from}&to=${to}&amount=${amount}`).pipe(
  //     map((response: any) => {
  //       return response;
  //     }));
  // }
}
