import { Action } from '@ngrx/store';

// load cards
export const LOAD_CARDS = '[Products] Load Cards' ;
export const LOAD_CARDS_FAIL = '[Products] Load Cards Fail' ;
export const LOAD_CARDS_SUCCESS = '[Products] Load Cards Success';

export const ADD_CARD = '[Products] Add Card';
export const DELETE_CARD = '[Products] Delete Card';


export class LoadCards implements Action{
  readonly type =  LOAD_CARDS
}

export class LoadCardsFail implements Action{
  readonly type =  LOAD_CARDS_FAIL ;
  constructor(public  payload: any){}
}

export class LoadCardsSuccess implements Action{
  readonly type =  LOAD_CARDS_SUCCESS ;
  constructor(public  payload: any){}
}

export class AddCard implements Action{
  readonly type = ADD_CARD ;
  constructor(public payload: any){}
}

export class DeleteCard implements Action{
  readonly type = DELETE_CARD ;
  constructor(public payload: any){}
}

// action types
export type CardsAction = LoadCards | LoadCardsFail | LoadCardsSuccess | AddCard | DeleteCard
