import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  bookQuantity:any;
  fullName:any;
  MobileNumber:any;
  typeId:any;

  AddressList:any;
  AddressId:any;
  showAddress = true;
  showButton = true;
  showCart = true;
  showContinueButton = false;
  showOrdersummery = false;
  constructor(private bookService: BookService,private formBuilder: FormBuilder,private router: Router) { 
    this.fullName= localStorage.getItem("fullName");
    this.MobileNumber= localStorage.getItem("MobileNumber");
  }

  ngOnInit(): void {
    this.getCartbook();
    this.getbookAddress();
    this.BookingForm = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]]
    });

  }
  onSubmit() {
    this.showCart = false;
    this.showContinueButton = true;

    this.submitted = true;
    if (this.BookingForm.valid) {
      let reqdata = {
        address: this.BookingForm.value.address,
        city: this.BookingForm.value.city,
        state: this.BookingForm.value.state,
        typeId: this.typeId
      }
      console.log(reqdata)
      this.bookService.addAddress(reqdata).subscribe((response: any) => {
        console.log("Address Added Successfully", response);
    }
  )}
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
  minus(cartId:any, orderQuantity:any){
    console.log(cartId,orderQuantity)
    if(orderQuantity > 1)
    {
      this.bookService.updatecartitem(cartId,(orderQuantity-1)).subscribe((response: any) => {
        console.log("Cart minus Successfully", response);
        this.getCartbook();
      }); 
    }
     
  }
  plus(cartId:any, orderQuantity:any){
    console.log(cartId,orderQuantity)
    if(orderQuantity < 10)
    {
      this.bookService.updatecartitem(cartId,(orderQuantity+1)).subscribe((response: any) => {
        console.log("Cart plus Successfully", response);
        this.getCartbook();
      });
    }
  }
  getbookAddress() {
    this.bookService.getAddress().subscribe((response: any) => {
      console.log("Address Found Successfully", response);
      this.AddressList = response.response;
      this.AddressId = this.AddressList[0].addressId;
    })
  }
Continue()
{
  this.showOrdersummery=true;
  console.log(this.AddressId);
}
  ordersummary()
  {
    let reqData = {
      bookId : this.booksArray[0].bookId,
      addressId : this.AddressId,
      bookQuantity : this.booksArray[0].orderQuantity
    }
    console.log(reqData)
    this.bookService.addorder(reqData).subscribe((response: any) => {
    console.log("order Successfully Added", response);
    this.router.navigate(['/dashboard/placeOrder'])
  })
}
  
}