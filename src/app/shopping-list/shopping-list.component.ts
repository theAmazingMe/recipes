import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredients/Ingredient.model';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { ShoppingListService } from '../services/ShoppingListService';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit{
  
  @Input() ingredients: Ingredient[];

  constructor(private service: ShoppingListService) { }

  ngOnInit(): void {
    this.service.deletingCurrentRecipeIngredient.subscribe(() => {
      
    });
  }


  selectTriggered(id : number){
    this.service.select.emit(id);
  }

  removeTriggered(id:number){
    this.service.deleteCurrentRecipeIngredient.emit(id);
  }

  removeIngredient(id:number):void {
      this.ingredients.splice(id, 1);
  }

  faX = faX;
}
