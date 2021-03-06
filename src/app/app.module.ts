import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { AddBookComponent } from './add-book/add-book.component';



const appRoutes: Routes = [
  { path: 'homepage', component:HomepageComponent  },
  {path:  'library', component:LibraryComponent},
  {path:  'addBook', component:AddBookComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookEditComponent,
    HomepageComponent,
    NavBarComponent,
    LibraryComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [LibraryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
