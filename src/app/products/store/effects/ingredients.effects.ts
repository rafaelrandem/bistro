import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {catchError, map, switchMap} from 'rxjs/operators';
import { IngredientModel } from '../../models/topping.model';
import {CardsService} from '../../components/card-container/cards.service';
import {of} from 'rxjs';

import * as indegrientActions from '../actions/ingredient.action';
import {Rl_table} from '../../../classes/localStorage';

@Injectable()
export  class IngredientsEffects {

  ingredients = new Rl_table('ingredients')
  loadIngredients: any ;

  constructor(private actions$: Actions, private cardService: CardsService )
  {
    if(this.ingredients.table.length > 0)
    {
      console.log('local ingredients')
      this.loadIngredients = this.ingredients.table$;
      this.loadIngredients.subscribe( ing => console.log(ing))
    }
    else
    {
      console.log('server')
      this.loadIngredients = this.cardService.getIngredients();
      this.loadIngredients.subscribe( ing => this.ingredients._setTable(ing))
    }

  }
  @Effect()
  loadToppings$ = this.actions$.pipe(
    ofType(indegrientActions.LOAD_INGREDIENTS),
    switchMap(
      () =>{ return  this.loadIngredients.pipe(
        map( (json: IngredientModel[]) => new indegrientActions.LoadIngredientsSuccess(json)),
        catchError(error => of(new indegrientActions.LoadIngredientsFail(error)))
      )}
    )

)

  addIngredient$ = this.actions$
    .pipe(
      ofType(indegrientActions.ADD_INGREDIENT)
    )
    .subscribe((el: any)=> {
      console.log('Effect Add Card:', el);
      const index = this.ingredients.table
        .map(item => item.id)
        .indexOf(el.payload.id)
      console.log(index)
      if(index>=0 )
      {
        this.ingredients._delete(index)
        this.ingredients._insert(index, el.payload)
      } else {
        this.ingredients._push(el.payload)
      }

    })

  deleteIngredients$ = this.actions$
    .pipe(
      ofType(indegrientActions.DELETE_INGREDIENT)
    )
    .subscribe((el: any)=> {
      console.log('Effect Delete Card:', el.payload );
      const index = this.ingredients.table
        .map(item => item.id)
        .indexOf(el.payload.id)
      this.ingredients._delete(index)
    })


}
