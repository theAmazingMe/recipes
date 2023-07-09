import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients/Ingredient.model';
import { faPlus,faFloppyDisk, faEraser } from '@fortawesome/free-solid-svg-icons';
import { ShoppingListService } from 'src/app/services/ShoppingListService';
import { EventManager } from './shopping-edit.component.events';
import data from './simple-ingredient-list.json';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
 
  @Output() edit = new EventEmitter<Ingredient>();
  @Input() ingredient : Ingredient;

  events : EventManager;

  exemple : string = "sugar";
  exemples : string[] = [];

    constructor (private service : ShoppingListService){
      const arr :string[] = data;
      this.exemples = arr;
      console.log(JSON.stringify(this.exemples))
      this.events = new EventManager(this,service);
    }

    added() {
      this.service.addedToCurrentRecipe.subscribe((ingredient : Ingredient) => {
        this.clearTriggered();
      });
    }
  
    select() {
      this.service.selected.subscribe((ingredient : Ingredient) => {
        this.ingredient = ingredient;
      });
    }
  
    addTriggered(){
      this.service.addToCurrentRecipe.emit(new Ingredient(null, this.ingredient.name, this.ingredient.amount));
    }
  
    editTriggered(){
      this.service.edit.emit(this.ingredient);
    }
  
    clearTriggered(){
      this.ingredient.amount = 0;
      this.ingredient.name = "";
      this.ingredient.id=-1;
    }

  GFG_Fun() : string {
      return this.exemples[(Math.floor(Math.random() * this.exemples.length))];
  }

  ngOnInit(): void {
    this.exemple = this.GFG_Fun();
    this.select();
    this.added();
  }

  //icons
  faPlus = faPlus;
  faFloppyDisk = faFloppyDisk;
  faEraser = faEraser;
}
