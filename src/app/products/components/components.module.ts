import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardsComponent } from './card-container/show-cards/show-cards.component';
import { CardFormComponent } from './card-container/card-form/card-form.component';
import { ContainersModule} from '../containers/containers.module';
import { MaterialSharedModule} from '../../material-shared.module';
import { ShowCardComponent } from './card-container/show-card/show-card.component';
import { RouterModule } from '@angular/router';
import { CardModalComponent } from './card-container/card-modal/card-modal.component';
import {FormsModule} from '@angular/forms';
import { ShowIngredientsComponent } from './ingredients/show-ingredients/show-ingredients.component';
import { IngredientModalComponent } from './ingredients/ingredient-modal/ingredient-modal.component';

@NgModule({
  declarations: [ShowCardsComponent, CardFormComponent, ShowCardComponent, CardModalComponent, ShowIngredientsComponent, IngredientModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContainersModule,
    MaterialSharedModule,
    RouterModule,
  ],
  entryComponents: [CardModalComponent, IngredientModalComponent],
  exports: [ShowCardsComponent, ShowCardsComponent ,CardModalComponent]
})
export class ComponentsModule { }
