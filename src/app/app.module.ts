import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import { countReducer } from './count/ngrx/count.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MaterialSharedModule} from './material-shared.module';

import { reducers, CustomSerializer } from './store';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {CardModalComponent} from './products/components/card-container/card-modal/card-modal.component';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {

    // console.log('debug ->')
    // console.log('state', state);
    // console.log('action', action);
    // console.log('-')

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 10}),
    MaterialSharedModule,

  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomSerializer},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
