import * as fromRouter from '@ngrx/router-store'
import {ActivatedRouteSnapshot, Params, RouterStateSnapshot} from '@angular/router';
import { ActionReducerMap, createFeatureSelector  } from '@ngrx/store';

export interface RouterStateURL {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateURL>
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateURL>>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateURL>{
  serialize(routerState: RouterStateSnapshot): RouterStateURL {
    const { url } = routerState;
    const { queryParams } = routerState.root ;

    let state: ActivatedRouteSnapshot = routerState.root ;
    while(state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state ;

    return { url, queryParams, params };
  }
}
