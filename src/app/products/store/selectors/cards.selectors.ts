import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store'
import * as fromFeatures from  '../reducers'
import * as fromCards from '../reducers/card.reducer';

import { CardModel } from '../../models/card.model';


export const getCardState = createSelector(
   fromFeatures.getProductsState,
  (state: fromFeatures.ProductsState) => state.cards
);

export const getCardEntities = createSelector( getCardState, fromCards.getCardsEntities);

export const getSelectedCard = createSelector(
  getCardEntities,
  fromRoot.getRouterState,
  (entities, router): CardModel => {
    return router.state && entities[router.state.params.cardId]
  }
);

export const getAllCards = createSelector(
  getCardEntities,
  (entities) => { return Object.keys(entities).map(id => entities[parseInt(id, 10)])}

);

export const getCardsIsLoading = createSelector( getCardState, fromCards.getCardsIsLoading);

export const getCardsIsLoaded = createSelector( getCardState, fromCards.getCardsIsLoaded);


