import { IngredientModel } from './topping.model';

export interface CardModel {

  id?: number;
  name?: string;
  ingredients: IngredientModel[];
}

export class CardItem<CardModel> {
  constructor(
    public card: CardModel
  ) {

  }
}
