import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { UsageDataInterface } from '../shared/httpReqType.model';
import { NewsArticleDetails_Service } from '../services/news-article_details.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  base_URL: string = `https://newsapi.org/v2/everything?q=keyword&apiKey=${environment.api_Key_news}`;

  newsArticleArr!: UsageDataInterface[];

  isLoading: boolean = false;

  constructor(
    private httpService: HttpService,
    private newsArticleService: NewsArticleDetails_Service
  ) {}

  ngOnInit() {
    this.getNews();
  }

  //? function to get news data:
  getNews() {
    this.isLoading = true;
    this.httpService.newsFetching().subscribe((response) => {
      if (response.status == 'ok') {
        // console.log(response);
        this.isLoading = false;
      }
      //*copying the response data into array
      this.newsArticleArr = response.articles;
      // console.log('news article array :', this.newsArticleArr);
      return this.newsArticleArr;
    });
  }

  getFullNews(id: number) {
    console.log(this.newsArticleArr);

    this.newsArticleService.articleDetails(this.newsArticleArr);

    //* coverting id of type number to a string
    let selectednews = JSON.stringify(this.newsArticleArr[id]);

    //? setting the selected id inside the local storage
    localStorage.setItem('selected_Id', selectednews);
  }
}
