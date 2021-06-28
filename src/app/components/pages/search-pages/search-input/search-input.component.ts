import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Output() searchInput = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  search(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.value && element.value.length > 1) {
      this.searchInput.emit(element.value);
    }
  }
}
