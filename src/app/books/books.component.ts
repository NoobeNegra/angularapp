import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    books: Book[];

    constructor(private bs: BookService) { }
    ngOnInit() {
	this.getBooks();
    }

    getBooks(): void {
	this.bs.getAllBooks().subscribe(books => this.books = books);
    }

}
