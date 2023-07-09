import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredients/Ingredient.model';
import { ShoppingListService } from 'src/app/services/ShoppingListService';
import { RecipeWithIngredients } from 'src/app/shared/recipes/RecipeWithIngredients';
import { RecipeWithId } from 'src/app/shared/recipes/RecipeWithId.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit{
  
  @Input() recipe : Recipe;
  ingredient: Ingredient = new Ingredient(-1, "", 0);

  constructor(private service : ShoppingListService){}
  ngOnInit(): void {
    this.edit();
    this.select();
    this.add();
    this.deleteIngredient();
  }
  deleteIngredient() {
    this.service.deleteCurrentRecipeIngredient.subscribe((index : number) => {
        this.service.deletingCurrentRecipeIngredient.emit(new RecipeWithId(this.recipe,index));
    });  
  }
  
  add() {
    this.service.addToCurrentRecipe.subscribe((ingredient : Ingredient) => {
      ingredient.id = null;
      const newThing : RecipeWithIngredients = new RecipeWithIngredients(this.recipe,ingredient);
      const toPersist : Ingredient = this.service.newEntry(this.recipe.ingredients,newThing)
      

      this.service.addingToCurrentRecipe.emit(toPersist);
      this.recipe.ingredients.push(toPersist);
    });
  }

  select() {

    // listening
    this.service.select.subscribe((id : number) => {

      // handover
      this.service.selecting.emit(new RecipeWithId(this.recipe,id));

      console.log(id)
    });
  }

  edit() {

    // listening
    this.service.edit.subscribe((ingredient : Ingredient) => {

      // process information
      const changes : RecipeWithIngredients = new RecipeWithIngredients(this.recipe,ingredient);

      // handover
      this.service.edditing.emit(changes);
    })
  }
}
