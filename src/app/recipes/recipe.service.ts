import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
      new Recipe('Hotdog', 'Very Good','http://static.parade.com/wp-content/uploads/2013/07/hot-dog-ftr.jpg',[
        new Ingredient('Ground pork', 2),
        new Ingredient('Hotdog Buns', 1)
      ]),
      new Recipe('Spaghetti', 'Okay', 'http://www.sbarro.com/wp-content/uploads/2015/04/12-sbarro-spaghetti-meatballs.jpg', [
        new Ingredient('Spaghetti Noodles', 1),
        new Ingredient('Marinara Sauce', 1),
        new Ingredient('Ground Beef', 1),
      ]),
      new Recipe('Calamari', 'Excellent','http://f.tqn.com/y/culinaryarts/1/W/h/b/-/-/calamari-2500.jpg',[
        new Ingredient('Squid', 1),
        new Ingredient('Box of panko', 1),
        new Ingredient('Lemon', 1)
      ])
    ];
  constructor() {}

  getRecipes() {
    return this.recipes;
  }
}
