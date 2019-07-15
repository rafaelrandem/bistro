import * as fromIngredients from '../actions/ingredient.action'

import { IngredientModel } from '../../models/topping.model';

export interface ToppingsState

{
  entities: { [id: number]: IngredientModel}
  isLoaded: boolean
  isLoading: boolean
}

export const initialState: ToppingsState = {
  entities: {},
  isLoaded: false,
  isLoading: false
}

export function reducer(
  state = initialState,
  action: fromIngredients.IngredientAction
): ToppingsState {

  switch (action.type) {
    case fromIngredients.LOAD_INGREDIENTS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromIngredients.LOAD_INGREDIENTS_SUCCESS: {
      const ingredients = action.payload;

      const entities = ingredients.reduce(
        (entities: {[id: number]: IngredientModel }, ingredient: IngredientModel )=>{
          return {
            ...entities, [ingredient.id]: ingredient
          };
        },
        {
          ...state.entities
        }
      )
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        entities
      }
    }
    case fromIngredients.LOAD_INGREDIENTS_FAIL:{
      return  {
        ...state,
        isLoaded: false,
        isLoading: false,
      }
    }

    case fromIngredients.ADD_INGREDIENT: {
      // create id
      let id ;
      if(!action.payload.id){
        const keys =  Object.keys(state.entities).map(el => parseInt(el, 10))
        id = Math.max.apply(null, keys) + 1
        action.payload.id = id
      } else {
        id = action.payload.id
      }
      return {
        ...state,
        entities:  {...state.entities , [id]: {id: id , ...action.payload }}

      }
    }
    case fromIngredients.DELETE_INGREDIENT: {
      let entities = { ...state.entities }
      delete entities[action.payload.id]
      return {
        ...state,
        entities: entities
      }
    }
  }

  return state
}

export const getIngredientsEntities = (state: ToppingsState) => state.entities;
export const getIngredientsLoaded = (state: ToppingsState) => state.isLoaded;
export const getIngredientsLoading = (state: ToppingsState) => state.isLoading;


//state
