import { Component, OnInit } from '@angular/core';
import { select, Store} from '@ngrx/store';

import * as fromStore from '../../../store'
import {Observable} from 'rxjs';
import {CardModel} from '../../../models/card.model';
import {MatDialog} from '@angular/material';
import {CardModalComponent} from '../card-modal/card-modal.component';
import * as rlTables from '../../../../localDB/tables'

@Component({
  selector: 'show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.sass']
})
export class ShowCardsComponent implements OnInit {

  result$: Observable<CardModel[]> ;
  isLoading$ ;
  isLoaded$  ;
  cards = rlTables.cardsTable;

  constructor(
    private store: Store<fromStore.ProductsState> ,
    public dialog: MatDialog
  ) {
    this.result$ = store.pipe(select(fromStore.getAllCards))
    this.isLoaded$ = store.pipe(select(fromStore.getCardsIsLoaded))
    this.isLoading$ = store.pipe(select(fromStore.getCardsIsLoading))
  }

  ngOnInit() {
    this.loadCard()
  }

  openDialog() {
    const dialogRef = this.dialog.open(CardModalComponent,
      {
        width: '100vw',
        maxWidth: '600px',
        data: {name: 'new name'}
      })

    dialogRef.afterClosed().subscribe((result: CardModel) => {
      console.log('The dialog was closed', result );
      result ? this.addCard(result) : null ;
    });
  }

  loadCard() {
    this.store.pipe(select(fromStore.getCardsIsLoaded))
      .subscribe(isLoaded => !isLoaded ? this.store.dispatch(new fromStore.LoadCards()) : null );
    // this.store.dispatch(new fromStore.LoadCards())

  }

  addCard(card: CardModel) {
    if(!card.ingredients) {card.ingredients = []}
    card ? this.store.dispatch(new fromStore.AddCard(card)) : null
  }

  exportCards(){
    this.cards._export()
  }

}
