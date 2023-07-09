import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../shared/recipes/recipe.model";
import { Ingredient } from "../shared/ingredients/Ingredient.model";

@Injectable()
export class RecipesService {
    recipes: Recipe[] = [
        new Recipe(1,"Pasta", "Good for health", "https://static01.nyt.com/newsgraphics/2021/08/16/cooking-fast-flavor/assets/images/meatball_sub_5667-1050_x2.jpg",
        [
          new Ingredient(1,"tomatoe",1)
        ]),
        new Recipe(2,"Pasta2", "Good for health", "https://static01.nyt.com/newsgraphics/2021/08/16/cooking-fast-flavor/assets/images/meatball_sub_5667-1050_x2.jpg",[] )
      ];

    select : EventEmitter<number> = new EventEmitter<number>();
    selected : EventEmitter<Recipe> = new EventEmitter<Recipe>();

    constructor() { 
        this.select.subscribe(id => {
            this.fetchById(id)
        })
    }
    fetchById(id: number) {
        const found = this.recipes.find(recipe => recipe.id === id)
        this.selected.emit(found);
    }

    getRecipes() : Recipe[] {
        return this.recipes.slice();
    }
}