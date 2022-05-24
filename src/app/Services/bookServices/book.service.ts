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
  getfeedBack(data: any){
    this.token = localStorage.getItem('token');
    console.log("data")
    let header = {
      headers: new HttpHeaders({  
       'Content-Type': 'application/json',
      //  'Authorization': `Bearer ${this.token}`
      })
    }
    console.log(header); 
    return this.httpService.getService('FeedBack/Get?bookId='+ data.bookId,true,header);
  
  }
}
