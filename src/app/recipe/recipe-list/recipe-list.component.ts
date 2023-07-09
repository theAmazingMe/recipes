import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipes/recipe.model';
import { RecipesService } from 'src/app/services/RecipesService';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit{
  
  elements: Recipe[];
  @Output() add: EventEmitter<Recipe> = new EventEmitter();

  constructor(private service : RecipesService){}
  ngOnInit(): void {
    this.elements = this.service.getRecipes();
  }

  triggerSelect(id : number) {
    this.service.select.emit(id)
  }

  triggerAdd() {
    this.add.emit(null);
    console.log("add emitted")
  }
}
