import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/pages/search-pages/search-pages.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookmarkComponent } from './components/pages/bookmark-page/bookmark/bookmark.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { SearchResultComponent } from './components/pages/search-pages/search-result/search-result.component';
import { SearchInputComponent } from './components/pages/search-pages/search-input/search-input.component';
import { BookmarkPageComponent } from './components/pages/bookmark-page/bookmark-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    BookmarkComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SearchResultComponent,
    SearchInputComponent,
    BookmarkPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
