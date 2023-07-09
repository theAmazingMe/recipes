import { Ingredient } from "../shared/ingredients/Ingredient.model";
import { Recipe } from "../shared/recipes/recipe.model";
import { ShoppingListService } from "./ShoppingListService";
import { TestBed } from "@angular/core/testing";

describe('shopping service', () => {
    let masterService: ShoppingListService  = new ShoppingListService();
    
    const ingredients : Ingredient[] = [
        new Ingredient(3,"lorem",0),
        new Ingredient(2,"lorem",0),
        new Ingredient(1,"lorem",0)
    ];

    beforeEach(() => {
        //masterService = TestBed.inject(ShoppingListService)
    });
  
    it('return the higher id incremented', () => {

        const newId : number = masterService.getNewId(ingredients);
      expect(newId).toBe(3+1)
    });

    it('find an existing id',() => {

        const found : boolean = masterService.existsId(ingredients,2);
        expect(found).toBeTruthy()
    });

    [
        [new Ingredient(2,"lorem",1)],
        [new Ingredient(2,"ipsum",4)]
    ].forEach(([candidate]) => {
        
        it(`gives a new instance whenever the name (${candidate.name}) is a match or not name`, () => {

        const recipe : Recipe = new Recipe(0,"test","test","some path",ingredients);
        const result : Ingredient = masterService.getModifiedIngredient({recipe,candidate});

        expect(result).not.toBe(null);

    });})

    it("creates a new if the id is not found", () => {
        const candidate = new Ingredient(9999,"ipsum",4);

        const recipe : Recipe = new Recipe(0,"test","test","some path",ingredients);
        const result : Ingredient = masterService.getModifiedIngredient({recipe,candidate});

        expect(result.id).not.toBe(9999);
    });

    [
        {id:2,name:"Sapristy"},
        {id:8888,name:"Julian"}
    ].forEach(({id,name} ) => {
        it(`The name (${name}) has changed for both fetched and non fetched candidate`, () => {
            const candidate = new Ingredient(id,name,4);
    
            const recipe : Recipe = new Recipe(0,"test","test","some path",ingredients);
            const result : Ingredient = masterService.getModifiedIngredient({recipe,candidate});
    
            expect(result.name).toBe(name);
        })
    })
})