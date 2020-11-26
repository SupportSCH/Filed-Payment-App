import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CardDetail } from './../../models/card-detail.model';
import { AppState } from './../../app.state';
import * as CardActions from './../../actions/card-detail.actions';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { PaymentService } from './../../services/payment.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  cards: Observable<CardDetail[]>;
  currDate: any;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    public datepipe: DatePipe,
    private paymentService: PaymentService
  ) {
    this.cards = store.select('cards');
    this.currDate = new Date();
    this.currDate = this.datepipe.transform(this.currDate, 'yyyy-MM-dd');
  }

  cardDetailsForm = this.fb.group({
    cardNumber: ['', Validators.required],
    cardHolder: ['', Validators.required],
    expDate: [Validators.required],
    cvc: ['', Validators.required],
    amount: [3890.46, Validators.required]
  })

  ngOnInit(): void { }

  onSubmit() {
    this.paymentService.makePayment(this.cardDetailsForm)
      .subscribe((res) => {
        console.log('response ', res );
        
        if (res.status == 200) {
          Swal.fire({
            title: 'Payment recieved for amount &#x20B9; ' + res.body.amount,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
            showCancelButton: false,
          })
          setTimeout(() => {
            this.store.dispatch(new CardActions.AddCardDetail({
              cardNumber: this.cardDetailsForm.value.cardNumber,
              cardHolder: this.cardDetailsForm.value.cardHolder,
              expDate: new Date(this.cardDetailsForm.value.expDate),
              cvc: this.cardDetailsForm.value.cvc
            }))
          }, 2500)
        }
      },
        (err) => {
          if (err) {
            Swal.fire({
              title: 'Something went wrong!. Please try again',
              icon: 'error',
              timer: 2000,
              showConfirmButton: false,
              showCancelButton: false,
            })
          }
        })
  }

  selectCard(index) {
    this.cards.forEach(element => {
      let date: any = element[index].expDate;
      date = this.datepipe.transform(date, 'yyyy-MM-dd');

      this.cardDetailsForm = this.fb.group({
        cardNumber: [element[index].cardNumber, Validators.required],
        cardHolder: [element[index].cardHolder, Validators.required],
        expDate: [date, Validators.required],
        cvc: [element[index].cvc, Validators.required],
        amount: [3890.46, Validators.required]
      })
    });

  }

  deleteCardDetail(index) {
    this.store.dispatch(new CardActions.RemoveCardDetail(index))
  }

}
