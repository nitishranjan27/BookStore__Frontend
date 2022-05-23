import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  register(reqdata: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService('User/Register', reqdata, false, header)
  }
  login(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService("User/Login",reqdata,false,header)
  }
  forgot(reqdata:any){
    console.log(reqdata)
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService("User/ForgotPassword",reqdata,false,header)
  }
  reset(reqdata:any,token:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+token 
        
      })
    }
    return this.httpService.patchService("User/ResetPassword",reqdata,true,header)
  }


}
