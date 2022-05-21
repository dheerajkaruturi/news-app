import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsArticleDetailsComponent } from './home-page/news-article-details/news-article-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpFormComponent } from './login-page/sign-up-form/sign-up-form.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
