import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../Services/bookServices/book.service';

@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  booksArray: any = [];
  bookQuantity : any;
  Book:any;
  orderQuantity:any;

  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.getAllBook();
  }
  getAllBook() {
    this.bookService.GetAllBooks().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.response;
      console.log(this.booksArray);
    });
  }
  quickview(Book:any){  
    localStorage.setItem('bookId', Book.bookId); 
    this.router.navigateByUrl('dashboard/quickview')
  }
  AddToBag(Book: any){
    // let reqdata = {
    //   bookId: this.Book.bookId,
    //   orderQuantity: this.orderQuantity
    // }
    this.bookService.addToBag(Book.bookId).subscribe((response:any) =>{
      console.log('Add To Bag ',response)
    })
    }
  lowtohigh(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);
    }
  hightolow(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.booksArray.reverse();
  }
}
