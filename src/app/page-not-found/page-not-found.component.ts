import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  svgPath: string = '../../assets/undraw_page_not_found_re_e9o6.svg';

  constructor() {}

  ngOnInit(): void {}
}
