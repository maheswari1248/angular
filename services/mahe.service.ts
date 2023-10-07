import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaheService
 {

  
  private _searchurl="https://restcountries.com/v3.1/name/";
  constructor(private _http: HttpClient) { }

  searchCountries(value:any):Observable<any>{
  return this._http.get<any>(this._searchurl+value);
  }

  searchCountriesUsingPromise(value:any):Promise<any>{
    //return this._http.get<any>(this._searchurl+value).toPromise();
    return firstValueFrom(this._http.get<any>(this._searchurl+value));
  }

}
