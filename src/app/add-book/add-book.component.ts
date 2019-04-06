import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

   @Input() book: Book;

  constructor(private router: Router, private ser: LibraryServiceService ) {
  }

  ngOnInit() {
  }

  addButton(title: string, author: string, date: string) {
    if (title.length == 0 || author.length == 0 || date.length == 0) {
      alert('error, please enter a valid value');
    } else {
      this.book = new Book(this.bookService.getBooks().length + 2, author, new Date(), title); 
      this.ser.addBook(this.book);
      this.router.navigate(['/library']);
    }
  }

}
