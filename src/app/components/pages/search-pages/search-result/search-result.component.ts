import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { IImage } from '../../../../models/models';
import { FlickrService } from '../../../../service/flickr.service';
import { LocalStorageService } from '../../../../service/local-storage.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() searchInput: string;
  images = [];
  pageIndex: number = 0;
  pageSize: number = 15;
  lowValue: number = 0;
  highValue: number = this.pageSize;

  private _aSub: Subscription;

  constructor(
    private _flickrService: FlickrService,
    private _localStorageService: LocalStorageService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    let { searchInput } = changes;
    if (searchInput) {
      this.search();
    }
  }

  /*Для сохранения закладки*/
  bookmark(image: IImage) {
    let bookmarkArr = this._localStorageService.get();
    bookmarkArr.push(image);
    bookmarkArr = bookmarkArr.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.url === thing.url && t.title === thing.title)
    );
    this._localStorageService.set(bookmarkArr);
  }

  search() {
    this._aSub = this._flickrService
      .search_keyword(this.searchInput)
      .subscribe((res) => {
        this.images = res;
      });
  }
  /*Для пагинации*/
  getPaginatorData(event: PageEvent) {
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    } else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }

  /*Для добавления тега к изображению при сохранении в закладках*/
  tags(event, image) {
    Object.assign(image, { tags: event.target.value });
  }

  ngOnDestroy() {
    if (this._aSub) {
      this._aSub.unsubscribe();
    }
  }
}
