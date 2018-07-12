import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class BookService {

    constructor(private http: HttpClient) { }

    insertBook(b:Book): Observable<Book>{
	return this.http.post<Book>('http://localhost:8000/api/add-book/', b, httpOptions);
    } 

    getTopBooks():Observable<Book[]>{
	return this.http.get<Book[]>('http://localhost:8000/api/top-books/');
    }

    getAllBooks(limit:number, offset:number):Observable<Book[]>{
	return this.http.post<Book[]>('http://localhost:8000/api/books/', {"offset":offset,"limit":limit});
    }
}
