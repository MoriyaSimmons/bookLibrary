import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
@Input() item: Book;

@Output() edit: EventEmitter<any> = new EventEmitter();
@Output() delete: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  editButton(id: number){
    this.edit.emit(id);
  }
  
 deleteButton(id: number){
    this.delete.emit(id);
  }
}
