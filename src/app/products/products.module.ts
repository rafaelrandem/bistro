import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComponentsModule} from './components/components.module';
import {RouterModule, Routes} from '@angular/router';
import {ShowCardsComponent} from './components/card-container/show-cards/show-cards.component';
import {ShowCardComponent} from './components/card-container/show-card/show-card.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import {ContainersModule} from './containers/containers.module';
import {CardFormComponent} from './components/card-container/card-form/card-form.component';
import {ShowIngredientsComponent} from './components/ingredients/show-ingredients/show-ingredients.component';

const routes: Routes = [
  {
    path: '', component: ShowCardsComponent
  },
  { path: 'form', component: CardFormComponent},

  { path: 'ing', component: ShowIngredientsComponent},

  {
    path: ':cardId', component: ShowCardComponent
  },
  {
    path: '**', component: ShowCardsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ContainersModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [ContainersModule, ComponentsModule]
})
export class ProductsModule { }
