import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatDialogModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  FlexLayoutModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatCheckboxModule,

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules

  ],
  exports: [
    ...materialModules
    ]
})
export class MaterialSharedModule { }
