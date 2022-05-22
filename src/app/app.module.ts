import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoadingSpinner } from './loading-spinner/loading.component';
import { NewsArticleDetailsComponent } from './home-page/news-article-details/news-article-details.component';
import { SignInFormComponent } from './login-page/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './login-page/sign-up-form/sign-up-form.component';
import { PricingPlansComponent } from './pricing-plans/pricing-plans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NavigationComponent,
    LoadingSpinner,
    NewsArticleDetailsComponent,
    SignInFormComponent,
    SignUpFormComponent,
    PricingPlansComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
