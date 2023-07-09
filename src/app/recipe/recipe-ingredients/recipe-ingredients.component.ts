import { Component, Input, SimpleChanges } from '@angular/core';
import { Recipe } from '../../shared/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredients/Ingredient.model';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html'
})
export class RecipeIngredientsComponent {

  @Input() ingredients: Ingredient[];
  @Input() recipe: Recipe;

  ingredient: Ingredient;

  selectTriggered(id){
    console.log(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ingredients = this.recipe.ingredients;
  }
}
