import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../../models/card.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  @Input() card: CardModel ;
  @Input() ingredients: any[] = [] ;

  constructor() { }

  ngOnInit() {
  }

}
