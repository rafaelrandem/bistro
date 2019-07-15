import { createReducer, on } from '@ngrx/store';
import { inc, dec, reset } from './count.actions';

export const startState = 0 ;

export const countReducer = createReducer( startState,
  on(inc, state => state +1),
  on(dec, state => state -1),
  on(reset, state => startState)
)
