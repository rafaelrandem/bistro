import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../store'
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {IngredientModalComponent} from '../ingredient-modal/ingredient-modal.component';
import * as rlTables from '../../../../localDB/tables'
import {Location} from '@angular/common';

@Component({
  selector: 'show-ingredients',
  templateUrl: './show-ingredients.component.html',
  styleUrls: ['./show-ingredients.component.sass']
})
export class ShowIngredientsComponent implements OnInit {

  ingredients = rlTables.ingredientsTable;
  ingredients$: Observable<any>;

  constructor(
    private store: Store<fromStore.ProductsState>,
    public dialog: MatDialog,
    private location: Location
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadIngredients());
    this.ingredients$ = this.store.select(fromStore.getAllIngredients)
    this.ingredients$.subscribe(console.log)
  }

  openDialog(data){
    const dialogRef = this.dialog.open(IngredientModalComponent,
      {
        width: '100vw',
        maxWidth: '600px',
        data:  { ...data }
      }
    )

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result );
      result ? this.addIngredient(result) : null ;
    });

  }

  addIngredient(ingredient) {
    this.store.dispatch(new fromStore.AddIngredient(ingredient))
  }

  deleteIngredient(ingredient){
    this.store.dispatch(new fromStore.DeleteIngredient(ingredient))
  }

  goBack(){
    this.location.back()
  }
}
