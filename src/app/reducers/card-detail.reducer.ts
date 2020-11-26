import { Action } from '@ngrx/store'
import { CardDetail } from './../models/card-detail.model'
import * as CardActions from './../actions/card-detail.actions'

const initialState: CardDetail = {
  cardNumber: '4427100838657007',
  cardHolder: 'Subrahmanya Bhat A',
  expDate: new Date(new Date().setFullYear(new Date().getFullYear() + 4)),
  cvc: "123"
}

export function reducer(state: CardDetail[] = [initialState], action: CardActions.Actions) {

  switch (action.type) {
    case CardActions.ADD_CARDDETAIL:
      return [...state, action.payload];

    case CardActions.REMOVE_CARDDETAIL:
      const newState = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
      return newState;

    default:
      return state;
  }
}