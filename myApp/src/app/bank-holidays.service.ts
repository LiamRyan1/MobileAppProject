import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankHolidaysService {

  constructor(private httpClient:HttpClient) { }
  GetMovieData():Observable<any>{
    return this.httpClient.get('https://www.gov.uk/bank-holidays.json')
  }
  }
