import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { AccountManagerPage } from './pages/account-manager-page/account-manager-page';
import { IngredientsManagerPage } from './pages/ingredients-manager-page/ingredient-manager-page';
import { LoginPage } from './pages/login-page/login-page';
import { RecipeCalculatorPage } from './pages/recipe-calculator-page/recipe-calculator-page';
import { RecipeManagerPage } from './pages/recipe-manager-page/recipe-manager-page';
import { SubscribePage } from './pages/subscribe-page/subscribe-page';
import { UsersManagerPage } from './pages/users-manager-page/users-manager-page';
import { LegalNoticePage } from './pages/legal-notice-page/legal-notice-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'account-manager', component: AccountManagerPage },
  { path: 'ingredient-manager', component: IngredientsManagerPage },
  { path: 'login', component: LoginPage },
  { path: 'recipe-calculator', component: RecipeCalculatorPage },
  { path: 'recipe-manager', component: RecipeManagerPage },
  { path: 'subscribe', component: SubscribePage },
  { path: 'users-manager', component: UsersManagerPage },
  { path: 'legal-notice', component: LegalNoticePage },
  { path: '**', redirectTo: 'home' },
];