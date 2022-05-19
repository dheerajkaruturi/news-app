import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { HttpreqType, UsageDataInterface } from '../shared/httpReqType.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService implements OnInit {
  base_URL: string = `https://newsapi.org/v2/everything?q=keyword&apiKey=${environment.api_Key_news}`;

  newsArticlesArr!: UsageDataInterface[];

  constructor(private httpRes: HttpClient) {}

  ngOnInit() {
    this.newsFetching();
  }

  newsFetching(): Observable<HttpreqType> {
    return this.httpRes.get<HttpreqType>(this.base_URL);
  }
}
