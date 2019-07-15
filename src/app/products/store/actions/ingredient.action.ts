import { Action } from '@ngrx/store';
import { IngredientModel } from '../../models/topping.model';

export const LOAD_INGREDIENTS = '[Product] Load Ingredients';
export const LOAD_INGREDIENTS_FAIL = '[Product] Load Ingredients Fail';
export const LOAD_INGREDIENTS_SUCCESS = '[Product] Load Ingredients Success';

export const ADD_INGREDIENT = '[Product] Add Ingredients Success';
export const DELETE_INGREDIENT = '[Product] Delete Ingredients Success';


export class LoadIngredients implements Action {
  readonly type = LOAD_INGREDIENTS
}

export class LoadIngredientsFail implements Action {
  readonly type = LOAD_INGREDIENTS_FAIL
  constructor(public payload: any){}
}

export class LoadIngredientsSuccess implements Action {
  readonly type = LOAD_INGREDIENTS_SUCCESS
  constructor(public payload: IngredientModel[]){}
}

export class AddIngredient {
  readonly type = ADD_INGREDIENT
  constructor(public payload: IngredientModel){}
}

export class DeleteIngredient {
  readonly type = DELETE_INGREDIENT
  constructor(public payload: IngredientModel){}
}



// action types
export type IngredientAction = LoadIngredients | LoadIngredientsFail | LoadIngredientsSuccess | AddIngredient | DeleteIngredient;
