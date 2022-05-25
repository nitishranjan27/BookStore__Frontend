import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookService } from '../Services/bookServices/book.service';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {
  BookingForm!: FormGroup;
  submitted = false;

  booksArray: any;
  token: any;
  Book: any;

  showAddress = true;
  showButton = true;
  showCart = true;
  showContinueButton = true;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getCartbook();
  }
  onSubmit() {
    this.showCart = false;
    this.showContinueButton = false;

    this.submitted = true;
    if (this.BookingForm.valid) {
      return
    }
    
  }

  getCartbook() {
    this.bookService.getCart().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.response;
      console.log(this.booksArray);

    });
  }
  addressToggle() {
    this.showAddress = false
    this.showButton = false
  }
  removeCart(cartId:any) {
    console.log(cartId)
    this.bookService.removecartitem(cartId).subscribe((response: any) => {
      console.log('Remove successfully', response);
    })
  }
  
}
