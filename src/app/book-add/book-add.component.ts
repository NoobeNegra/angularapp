import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})

export class BookAddComponent implements OnInit {

    constructor(private bs: BookService, private location: Location) { }

    ngOnInit() {}

    add(name:string, author:string, year:number, editorial:string): void {
	this.bs.insertBook({name, author, year, editorial} as Book).subscribe();
    }

    goToList():void{
	this.location.go('/books').subscribe();
    }
}
