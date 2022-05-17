import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpResponseType } from '../shared/httpReqType.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService implements OnInit {
  base_URL: string = `https://newsapi.org/v2/everything?q=keyword&apiKey=${environment.api_Key_news}`;

  newsData: any = [];

  constructor(private httpRes: HttpClient) {}

  ngOnInit() {
    this.newsData();
  }

  newsFetching() {
    return this.httpRes
      .get<HttpResponseType>(this.base_URL)
      .subscribe((response) => {
        this.newsData.push(response);
        console.log(this.newsData);
        return this.newsData;
      });
  }
}
