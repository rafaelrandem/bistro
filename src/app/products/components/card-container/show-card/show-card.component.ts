import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {from, Observable, Subject} from 'rxjs';
import {Location} from '@angular/common';

import {Store} from '@ngrx/store';
import * as fromStore from '../../../store'
import {MatDialog} from '@angular/material';
import {CardModalComponent} from '../card-modal/card-modal.component';
import {CardModel} from '../../../models/card.model';


@Component({
  selector: 'show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.sass']
})
export class ShowCardComponent implements OnInit {

  routeParam$: Observable<any>
  card$ ;
  ingredients$ ;

  _dialogData;
  productStore$ ;

  constructor(
    private activateRoute: ActivatedRoute,
    private location: Location,
    private store: Store<fromStore.ProductsState>,
    public dialog: MatDialog,
  ) {
    this.routeParam$ = this.activateRoute.params
  }

  ngOnInit() {
    this.store.select(fromStore.getCardsIsLoaded)
      .subscribe(isLoaded => !isLoaded ? this.store.dispatch(new fromStore.LoadCards()) : null );

    this.store.dispatch(new fromStore.LoadIngredients());
    this.card$ = this.store.select(fromStore.getSelectedCard);

    this.card$.subscribe(card => {this._dialogData =  {...card} ; console.log(this._dialogData)})

    this.ingredients$ = this.store.select(fromStore.getAllIngredients)
    this.ingredients$.subscribe(el => console.log(el)) ;

  }

  openDialog() {
    const dialogRef = this.dialog.open(CardModalComponent,
      {
        width: '100vw',
        maxWidth: '600px',
        data: this._dialogData
      })

    dialogRef.afterClosed().subscribe((result: CardModel) => {
      console.log('The dialog was closed', result );
      result ? this.updateCard(result) : null ;
    });

  }

  deleteCard(){
    if(window.confirm('You want Deleted Card !!! \r\r Are you sure ?!')) {
       this.store.dispatch(new fromStore.DeleteCard(this._dialogData));
       this.goBack();
    }


  }

  updateCard(card){
    this.store.dispatch(new fromStore.AddCard(card))
  }

  updateIngredients(ingredients){
    const updateCard = {...this._dialogData, ingredients: ingredients}
    console.log(updateCard)
    this.store.dispatch(new fromStore.AddCard(updateCard))
  }

  goBack(){
    this.location.back()
  }
}
