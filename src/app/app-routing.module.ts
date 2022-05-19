import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsArticleDetailsComponent } from './home-page/news-article-details/news-article-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'news_articleDetails/:id/:details',
        component: NewsArticleDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
