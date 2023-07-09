import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe/recipe-book/recipe-book.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeIngredientsComponent } from './recipe/recipe-ingredients/recipe-ingredients.component';
import { RecipesService } from './services/RecipesService';
import { ShoppingListService } from './services/ShoppingListService';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    FooterComponent,
    HeaderComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeIngredientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [RecipesService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
