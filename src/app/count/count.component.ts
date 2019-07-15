import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {dec, inc, reset} from './ngrx/count.actions';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.sass']
})
export class CountComponent implements OnInit {

  count$: Observable<number>

  constructor(private store: Store<{count: Number}>) {
    this.count$ = store.pipe(select('count'))
  }

  inc() {
    this.store.dispatch(inc())
  }

  dec() {
    this.store.dispatch(dec())
  }

  reset(){
    this.store.dispatch(reset())
  }

  ngOnInit() {
  }

}
