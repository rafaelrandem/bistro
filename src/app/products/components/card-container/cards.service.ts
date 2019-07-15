import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { CardModel } from '../../models/card.model';
import { IngredientModel } from '../../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<CardModel[]> {
    return this.http.get<CardModel[]>('/assets/fakeDB/cards.json')
  }

  getIngredients(): Observable<IngredientModel[]> {
    return this.http.get<IngredientModel[]>('/assets/fakeDB/ingredients.json')
  }
}
