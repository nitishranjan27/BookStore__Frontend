import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/bookServices/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  booksArray: any;
  BookId: any;
  Book: any;
  comment:any;
  rating:any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem("bookId");
    console.log(this.BookId);
    this.getAllBook();
  }
  getAllBook() {
    this.bookService.GetAllBooks().subscribe((response: any) => {
      response.response.forEach((element: any) => {
        if (element.bookId == this.BookId) {
          this.Book = element;
          console.log(this.Book);
        }
      });
    })
  }
  addFeedback() {
    let data = {
      rating: this.rating,
      comment: this.comment,
      bookId: this.Book.bookId
    }
    this.bookService.addfeedback(data).subscribe((response: any) => {
      console.log("User Feedback", response);
    },error=>{console.log(error)})
  }

  getFeedback() {
    let reqdata = {
      bookId: this.Book.bookId
    }
    this.bookService.getfeedBack(reqdata).subscribe((response: any) => {
      console.log('User Feedback', response);
      this.booksArray = response.response;
    });
  }

}
