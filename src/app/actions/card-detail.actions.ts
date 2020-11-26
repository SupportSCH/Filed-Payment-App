import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { CardDetail } from './../models/card-detail.model'


export const ADD_CARDDETAIL = '[CARDDETAIL] Add'
export const REMOVE_CARDDETAIL = '[CARDDETAIL] Remove'


export class AddCardDetail implements Action {
    readonly type = ADD_CARDDETAIL

    constructor(public payload: CardDetail) {}
}

export class RemoveCardDetail implements Action {
  readonly type = REMOVE_CARDDETAIL

  constructor(public payload: number) {}
}


export type Actions = AddCardDetail | RemoveCardDetail