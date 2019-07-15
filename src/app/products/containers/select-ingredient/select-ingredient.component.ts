import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IngredientModel} from '../../models/topping.model';

@Component({
  selector: 'select-ingredient',
  templateUrl: './select-ingredient.component.html',
  styleUrls: ['./select-ingredient.component.sass']
})
export class SelectIngredientComponent implements OnInit {

  @Input() ingredients: IngredientModel[] ;
  @Input() selected = [] ;
  @Output() _selected = new EventEmitter<IngredientModel[]>();


  constructor() { }

  ngOnInit() {
    console.log(this.selected)
  }


  addIngredient(item){

    const index = this.selected.map( el => el.id).indexOf(item.id)
    console.log(index)

    index <0 ? this.selected.push(item) : this.selected.splice(index ,1);

    this.selected.map( el =>
      console.log(el)
    )
    this._selected.emit(this.selected)
  }

  selectedColor(item){
    return this.selected.map(el => el.id).includes(item.id) ?  'primary' : 'default'
  }
}
