import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { NewsArticleDetails_Service } from 'src/app/services/news-article_details.service';
import { UsageDataInterface } from 'src/app/shared/httpReqType.model';

@Component({
  selector: 'app-news-article-details',
  templateUrl: './news-article-details.component.html',
  styleUrls: ['./news-article-details.component.css'],
})
export class NewsArticleDetailsComponent implements OnInit {
  //* array that holds the news article details selected by the user.
  newsDetailsHolder!: UsageDataInterface;

  constructor(
    private router: Router,
    private getNewsDetailsfromService: NewsArticleDetails_Service,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.displayNewsContent();
  }

  //* navigate back to home page.
  backtoHome() {
    this.router.navigate(['/home']);
    localStorage.removeItem('selected_Id');
  }

  displayNewsContent() {

    //? local storage approach.
    let item = localStorage.getItem('selected_Id');
    console.log(item);
    // this.newsDetailsHolder = item;
    // console.log(this.newsDetailsHolder);

    //? extracting the route parameters approach
    let idFromRoute = this.activatedRoute.snapshot.params['id'];

    console.log(this.getNewsDetailsfromService.newsarticleDetails[idFromRoute]);

    //? setting the value to array
    this.newsDetailsHolder =
      this.getNewsDetailsfromService.newsarticleDetails[idFromRoute];
  }
}
