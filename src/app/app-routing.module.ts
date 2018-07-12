import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent }      from './books/books.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';
import { BookAddComponent }  from './book-add/book-add.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'books', component: BooksComponent },
    { path: 'add-book', component: BookAddComponent },
    { path: 'detail/:id', component: BookDetailComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}