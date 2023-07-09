import { Recipe } from "./recipe.model";

export class RecipeWithId {
    constructor(public recipe: Recipe, public refNumber:number){}
}