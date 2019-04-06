import { Injectable } from '@angular/core';
import { Book } from '../Book';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {


   public books: Book[];

constructor() {
  this.books =  [
    {
      author: 'Suzanne Collins',
      date: new Date('4/5/1813'),
      title: 'the Hunger Games',
      id: '1'
    },
    {
      author: 'jane Austen',
      date: new Date('4/5/1981'),
      title: 'pride and Prejudice',
      id: '2'
    },
    {
      author: 'George Orwell',
      date: new Date('4/5/1991'),
      title: 'animal Farm',
      id: '3'
    }
    ];
}
getBooks(){
  return this.books;
}
  
addBook(mybook: Book) {
  this.books.push(mybook);

}

saveBook(mybook: Book) {
  const itemIndex = this.books.findIndex(item => item.id === mybook.id);
  this.books[itemIndex] = mybook;

}
deleteBook(mybook: Book) {
  const itemIndex = this.books.findIndex(item => item.id === mybook.id);
  this.books.splice(itemIndex,1);

}
editBook(mybook: Book){
  const index =  this.books.findIndex(item => item.id === mybook.id);
  return this.books[index];
}
}
