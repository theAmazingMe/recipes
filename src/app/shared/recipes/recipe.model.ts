import { Ingredient } from "../ingredients/Ingredient.model";

export class Recipe {

    constructor(public id : number, public name:string, public description:string, public imagePath:string, public ingredients: Ingredient[] = null){
        this.ingredients = ingredients != null ? ingredients : [];
    }
}