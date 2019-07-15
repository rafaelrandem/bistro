import * as fromFeatures from '../reducers'
import {createSelector} from '@ngrx/store';

export const getIngredientsState = createSelector(
  fromFeatures.getProductsState,
  (state: fromFeatures.ProductsState) => state.toppings
);
export const getIngredientsEntities = createSelector(
  getIngredientsState,
  (state) => state.entities

)

export const getAllIngredients = createSelector(
  getIngredientsEntities,
  (entities)=> { return Object.keys(entities).map( id => entities[parseInt(id , 10)])}
)
