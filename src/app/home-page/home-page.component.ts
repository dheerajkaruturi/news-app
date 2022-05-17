import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  base_URL: string = `https://newsapi.org/v2/everything?q=keyword&apiKey=${environment.api_Key_news}`;

  // newsArr!: HttpreqType;

  constructor(private httpRes: HttpClient, private httpService: HttpService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.httpService.newsFetching();
  }
}
