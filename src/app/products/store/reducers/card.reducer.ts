import * as fromCards from '../actions/cards.action'
import { CardModel } from '../../models/card.model';


export interface CardState {
  entities: {[id: number] : CardModel}
  // data: CardModel[],
  isLoaded: boolean,
  isLoading: boolean
}

export const initialState: CardState = {
  entities: [],
  isLoaded: false,
  isLoading: false,
}

export function reducer(
  state = initialState,
  action: fromCards.CardsAction
): CardState {

  switch(action.type) {

    case fromCards.LOAD_CARDS : {
      return {
        ...state,
        isLoading: true
      }
    }

    case fromCards.LOAD_CARDS_SUCCESS : {
      const cards = action.payload;
      const entities = cards.reduce((entities: { [id: number]: CardModel }, card: CardModel) => {
          return {
            ...entities, [card.id]: card
          };
        },
        {
          ...state.entities
        }
      );
      // console.log(entities)
      return {
        ...state,
        entities,
        isLoading: false,
        isLoaded: true
      }
    }

    case fromCards.LOAD_CARDS_FAIL : {
      return {
        ...state,
        isLoading: false,
        isLoaded: false
      }
    }

    case fromCards.ADD_CARD: {

      // create Id
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
        entities:  {...state.entities , [id]: {id: id , ...action.payload  }}
      }
    }

    case fromCards.DELETE_CARD: {
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

export const getCardsEntities = (state: CardState) => state.entities;
export const getCardsIsLoading = (state: CardState) => state.isLoading;
export const getCardsIsLoaded = (state: CardState) => state.isLoaded;

