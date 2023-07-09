import { Ingredient } from "../ingredients/Ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeWithIngredients {
    constructor(
        public recipe : Recipe,
        public candidate : Ingredient){}
}