import { Injectable } from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';

import * as cardActions from '../actions/cards.action'
import {catchError, map, switchMap} from 'rxjs/operators';
import {CardsService} from '../../components/card-container/cards.service';
import {Rl_table} from '../../../classes/localStorage';
import {of} from 'rxjs';

@Injectable()
export class CardsEffects {
  cards = new Rl_table('cards')
  loadCard ;

  constructor(private actions$: Actions , private cardsService: CardsService){

    if(this.cards.table.length > 0)
    {
      console.log('local')
      this.loadCard = this.cards.table$
      this.loadCard.subscribe( cards => console.log(cards))
    }
    else
    {
      console.log('server')
      this.loadCard = this.cardsService.getCards()
      this.loadCard.subscribe( cards => this.cards._setTable(cards))
    }

  }

  @Effect()

  loadCards$ =  this.actions$
    .pipe(
      ofType(cardActions.LOAD_CARDS),
      switchMap(()=> this.loadCard
        .pipe(
          map( cards => new cardActions.LoadCardsSuccess(cards)),
          catchError( err => of(new cardActions.LoadCardsFail(err)))
        )
      )
    )

  addCard$ = this.actions$
    .pipe(
      ofType(cardActions.ADD_CARD)
    )
    .subscribe((el: any)=> {
      console.log('Effect Add Card:', el);
      const index = this.cards.table
        .map(item => item.id)
        .indexOf(el.payload.id)
      console.log(index)
      if(index>=0 )
      {
      this.cards._delete(index)
      this.cards._insert(index, el.payload)
      } else {
        this.cards._push(el.payload)
      }

    })

  deleteCard$ = this.actions$
    .pipe(
      ofType(cardActions.DELETE_CARD)
    )
    .subscribe((el: any)=> {
      console.log('Effect Delete Card:', el.payload );
      const index = this.cards.table
        .map(item => item.id)
        .indexOf(el.payload.id)
        this.cards._delete(index)
    })

}

