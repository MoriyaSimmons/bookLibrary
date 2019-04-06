import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { LibraryServiceService } from '../services/library-service.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {


  public books: Book[];
  public editMode = false;
  public editBook: Book;



constructor(private ser: LibraryServiceService) {}


ngOnInit(){
  this.books= this.ser.getBooks();
}

  editEmit(item) {
    this.editMode = !this.editMode;
    this.editBook =this.ser.editBook(item);

  }

    saveEmit(item : Book) {
     this.ser.saveBook(item);
     this.editMode = !this.editMode;

   }
  editModeFunc() {
    this.editMode = !this.editMode;
  }

}
