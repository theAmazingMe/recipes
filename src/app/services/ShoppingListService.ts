import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients/Ingredient.model";
import { RecipeWithIngredients as RecipeWithIngredient } from "../shared/recipes/RecipeWithIngredients";
import { RecipeWithId } from "../shared/recipes/RecipeWithId.model";

export class ShoppingListService{

    ingredients : Ingredient[] = [
        new Ingredient(1,'Tomato', 1),
        new Ingredient(2,'Cucumber', 2),
        new Ingredient(3,'Lettuce', 1),
        new Ingredient(4,'Broccoli', 1),
        new Ingredient(5,'Onion', 1)
      ];

    edit : EventEmitter<Ingredient> = new EventEmitter();
    
    addToCurrentRecipe: EventEmitter<Ingredient> = new EventEmitter();
    addingToCurrentRecipe: EventEmitter<Ingredient> = new EventEmitter();
    addedToCurrentRecipe: EventEmitter<Ingredient> = new EventEmitter();

    remove : EventEmitter<number> = new EventEmitter();
    deleteCurrentRecipeIngredient  : EventEmitter<number> = new EventEmitter();
    deletingCurrentRecipeIngredient  : EventEmitter<RecipeWithId> = new EventEmitter();

    select : EventEmitter<number> = new EventEmitter();
    selecting: EventEmitter<RecipeWithId> = new EventEmitter();
    selected: EventEmitter<Ingredient> = new EventEmitter();
    
    edditing: EventEmitter<RecipeWithIngredient> = new EventEmitter();
  

  constructor() {
    this.addingToCurrentRecipe.subscribe(() => {
        this.addedToCurrentRecipe.emit(null);
    });

    this.deletingCurrentRecipeIngredient.subscribe((change : RecipeWithId) => {
        const index : number = this.getIdexFromId(change);
        change.recipe.ingredients.splice(index,1);
    })

    this.selecting.subscribe((selectIngredient : RecipeWithId) => {
        const ingredient = this.selectIngredient(selectIngredient);
        this.selected.emit(ingredient)
        
    });
    this.edditing.subscribe((change : RecipeWithIngredient) => {
        const index : number = this.getIdexOf(change);
        change.recipe.ingredients.splice(index,1,this.getModifiedIngredient(change));
    })
    }
    getModifiedIngredient(change : RecipeWithIngredient) : Ingredient{
        const id = change.candidate.id;
        const ingredients = change.recipe.ingredients;

        if(this.existsId(ingredients,id)){
            return this.modifiedExisting(ingredients,change);
        }else {
            return this.newEntry(ingredients,change);
        }
    }
    newEntry(ingredients : Ingredient[],change : RecipeWithIngredient): Ingredient {
        const nextId = this.getNewId(ingredients);
            change.candidate.id = nextId;
            return change.candidate;
    }
    modifiedExisting(ingredients : Ingredient[],change : RecipeWithIngredient): Ingredient {
        const ingredient : Ingredient = this.getOfList(ingredients,change.candidate.id);
            ingredient.name = change.candidate.name;
            ingredient.amount = change.candidate.amount;
            return ingredient;
    }
    getOfList(ingredients : Ingredient[] ,id: number): Ingredient {
        return ingredients.find( o => (o.id == id))
    }

    selectIngredient(selectIngredient: RecipeWithId) {
        const ingredients = selectIngredient.recipe.ingredients;
        const ingredient = ingredients[selectIngredient.refNumber];
        const id : number = ingredient.id;

        return new Ingredient(id,ingredient.name,ingredient.amount);
    }

    getNewId(ingredients : Ingredient[]) : number{
        if(!ingredients.length){
            return 0;
        }
        return Math.max(... ingredients.map(o => o.id))+1;
    }

    existsId(ingredients : Ingredient[], id : number) : boolean{
        return ingredients.filter(o => o.id == id).length > 0;
    }

    getIdexOf(change : RecipeWithIngredient){
        const ingredients : Ingredient[] = change.recipe.ingredients;
        const id = change.candidate.id;
        return ingredients.findIndex(o => o.id == id);
    }

    getIdexFromId(change : RecipeWithId){
        const ingredients : Ingredient[] = change.recipe.ingredients;
        const id = change.refNumber;
        return ingredients.findIndex(o => o.id == id);
    }
}