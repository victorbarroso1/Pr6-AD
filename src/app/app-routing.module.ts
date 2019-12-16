import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    
  },*/
 /*{
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    
  },*/
  {
    path: 'tabs/tab2/list', 
    loadChildren: () => import('./tab2/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: '', 
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
  },
  {
    path: 'recipe/:recipe_id',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'tabs/tab2/search',
    loadChildren: () => import('./tab2/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'tabs/tab2/new',
    loadChildren: () => import('./tab2/new/new.module').then( m => m.NewPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
