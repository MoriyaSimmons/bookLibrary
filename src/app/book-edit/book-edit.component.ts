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
  @Output() isEditMode: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor( private ser:LibraryServiceService) { }

  ngOnInit() {
  }

  saveButton(book) {
    if (book.title.length == 0 || book.author.length == 0 || book.date.toLocaleDateString().length == 0) {
      alert('error, please enter a valid value in title and author and date fields');
    } else {
      this.saveBook.emit(book);
    }

  }
  
  cancelEditBtn() {
    this.isEditMode.emit();
  }
}
