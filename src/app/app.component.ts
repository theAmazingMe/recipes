import { Component } from '@angular/core';
import { Ingredient } from './shared/ingredients/Ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  addIngredient(ingredient:Ingredient):void {
    this.ingredients.push(ingredient);
  }

  name = "";
  ingredient:Ingredient = new Ingredient(-1, "", 0);
  ingredients: Ingredient[];
  constructor(){
    this.ingredients = [
      new Ingredient(1,'Tomato', 1),
      new Ingredient(2,'Cucumber', 2),
      new Ingredient(3,'Lettuce', 1),
      new Ingredient(4,'Broccoli', 1),
      new Ingredient(5,'Onion', 1)
    ];
  }
}
