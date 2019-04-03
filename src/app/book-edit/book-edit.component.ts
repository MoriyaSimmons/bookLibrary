import { Book } from './../Book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LibraryServiceService } from '../services/library-service.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  @Input() book: Book;
  @Output() saveBook: EventEmitter<Book> = new EventEmitter<Book>();

  constructor( private ser:LibraryServiceService) { }

  ngOnInit() {
  }

  saveButton(book) {
    this.saveBook.emit(book);

  }

}
