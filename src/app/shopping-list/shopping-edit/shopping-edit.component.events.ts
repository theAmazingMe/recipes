import { ShoppingListService } from "src/app/services/ShoppingListService";
import { ShoppingEditComponent } from "./shopping-edit.component";
import { Ingredient } from "src/app/shared/ingredients/Ingredient.model";

export class EventManager {


    constructor(private component : ShoppingEditComponent,private service : ShoppingListService) {}
    
    
}