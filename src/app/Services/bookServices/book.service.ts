import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpService: HttpService) { 
    this.token = localStorage.getItem('token')
  }
  GetAllBooks() {
    this.token = localStorage.getItem('token')
    console.log("inside getbook service");
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getService('Book/GetAll', true, headers)
  }
  addfeedback(data:any){
    console.log(data)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('FeedBack/Add',data, true, header)
  }
  getfeedBack(bookId: any){
    this.token = localStorage.getItem('token');
    console.log("data")
    let header = {
      headers: new HttpHeaders({  
       'Content-Type': 'application/json',
      //  'Authorization': `Bearer ${this.token}`
      })
    }
    console.log(header); 
    return this.httpService.getService('FeedBack/Get?bookId='+ bookId,false,header);
  
  }
  addToBag(bookId: any) {
    console.log('bookId',bookId)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('Cart/Add' ,bookId, true, header)
  }
  getCart() {
    this.token = localStorage.getItem('token');
    console.log('token',this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    console.log(header);
    return this.httpService.getService('Cart/GetAll', true, header);
  }
  removecartitem(cart_Id: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`   
      })
    }
    return this.httpService.deleteService('Cart/Delete?cart_Id=' + cart_Id, true, header)
  }
  updatecartitem(cart_Id: any, orderQuantity:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`   
      })
    }
    return this.httpService.putService(`Cart/Update?cart_Id=${cart_Id}&orderQuantity=${orderQuantity}`,{}, true, header);
  }
  getAddress() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getService('Address/Get', true, header);
  }
  addAddress(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('Address/Add', reqData, true, header);
  }
  addorder(reqData: any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('Order/AddOrder', reqData, true, header);
  }
}
