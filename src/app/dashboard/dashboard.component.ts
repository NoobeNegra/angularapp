import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    books: Book[] = [];

    constructor(private bookService: BookService) { }

    ngOnInit() {
	this.getListBooks();
    }

    getListBooks(): void {
	this.bookService.getTopBooks().subscribe(books => this.books = books);
    }
}