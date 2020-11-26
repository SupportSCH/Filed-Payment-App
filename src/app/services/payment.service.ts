import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  makePayment(formValue): Observable<any> {
    let input = {
      "token": "WC9v_dEDSr5aBDJDnwCpAQ", //this is a fakejson api token of my account
      "data": {
        "cardNumber": formValue.value.cardNumber,
        "cardHolder": formValue.value.cardHolder,
        "expDate": formValue.value.expDate,
        "cvc": formValue.value.cvc,
        "amount": formValue.value.amount
      }
    }
    return this.http.post<any>(`https://app.fakejson.com/q`, input, {observe: 'response'}); //this is a fakejson api linked to my account
  }

}
