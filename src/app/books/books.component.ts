import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    books: Book[] = [];

    constructor(private bs: BookService) { }

    ngOnInit() {
	this.getListBooks(10,0);
    }

    getListBooks(limit:number, offset:number): void {
	this.bs.getAllBooks(limit,offset).subscribe(books => this.books = books);
    }
}
