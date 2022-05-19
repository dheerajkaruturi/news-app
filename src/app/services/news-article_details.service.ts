import { Injectable, OnInit } from '@angular/core';
import { UsageDataInterface } from '../shared/httpReqType.model';

@Injectable({
  providedIn: 'root',
})
export class NewsArticleDetails_Service implements OnInit {
  newsarticleDetails: UsageDataInterface[] = [];

  ngOnInit() {}

  articleDetails(newsArticle: UsageDataInterface) {
    this.newsarticleDetails.push(newsArticle);
    return this.newsarticleDetails;
  }
}
