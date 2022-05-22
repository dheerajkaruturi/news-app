import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsArticleDetailsComponent } from './home-page/news-article-details/news-article-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpFormComponent } from './login-page/sign-up-form/sign-up-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PricingPlansComponent } from './pricing-plans/pricing-plans.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  
  { path: 'sign-up', component: SignUpFormComponent },

  {
    path: 'home',
    component: HomePageComponent,
  },

  {
    path: 'home/news_articleDetails/:id',
    component: NewsArticleDetailsComponent,
  },

  { path: 'price-plans', component: PricingPlansComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
