import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-pages.component.html',
  styleUrls: ['./search-pages.component.scss'],
})
export class SearchPageComponent implements OnInit {
  searchInput: string;

  constructor() {}

  ngOnInit() {}

  search(event: string) {
    this.searchInput = event;
  }
}
