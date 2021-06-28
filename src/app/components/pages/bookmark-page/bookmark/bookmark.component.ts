import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../service/local-storage.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  bookmarks = this._localStorageService.get();

  constructor(private _localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  /* Удаление закладки */
  remoteImage(key: string) {
    this.bookmarks = this.bookmarks.filter((t) => t !== key);
    this._localStorageService.set(this.bookmarks);
  }
}
