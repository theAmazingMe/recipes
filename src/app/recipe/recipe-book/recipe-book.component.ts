import { Component } from '@angular/core';
import { Recipe } from '../../shared/recipes/recipe.model';
import { RecipesService } from 'src/app/services/RecipesService';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html'
})
export class RecipeBookComponent {

  constructor(private service : RecipesService){}

  selected: Recipe;

  ngOnInit() {
    this.service.selected.subscribe((recipe) => { 
        this.selected = recipe;
    });
    this.service.select.emit(1);
  }

  addRecipe(event){
    console.log(event);
  }
}
