<<<<<<< HEAD
import { provideRouter } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const APP_ROUTES_PROVIDERS = [
    provideRouter([
        { path: '', redirectTo: '/recipes', pathMatch: 'full'},
        { path: 'recipes', component: RecipesComponent },
        { path: 'shopping-list', component: ShoppingListComponent }
    ])
=======
import { provideRouter } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const APP_ROUTES_PROVIDERS = [
    provideRouter([
        { path: '', redirectTo: '/recipes', pathMatch: 'full'},
        { path: 'recipes', component: RecipesComponent },
        { path: 'shopping-list', component: ShoppingListComponent }
    ])
>>>>>>> 89a009f746dea1afebde60718a8af6c0d8d8ddea
];