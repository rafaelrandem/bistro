import {ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCards from './card.reducer'
import * as fromToppings from './ingredients.reducer'

export interface ProductsState {
  cards: fromCards.CardState
  toppings: fromToppings.ToppingsState
}

export const reducers: ActionReducerMap<ProductsState> = {
  cards: fromCards.reducer,
  toppings: fromToppings.reducer,
}

export const getProductsState =  createFeatureSelector<ProductsState>(
  'products'
);


