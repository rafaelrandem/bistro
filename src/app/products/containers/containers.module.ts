import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialSharedModule} from '../../material-shared.module';
import { SelectIngredientComponent } from './select-ingredient/select-ingredient.component';

@NgModule({
  declarations: [ProductCardComponent, SelectIngredientComponent],
  exports: [
    ProductCardComponent,
    SelectIngredientComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
  ],
})
export class ContainersModule { }
