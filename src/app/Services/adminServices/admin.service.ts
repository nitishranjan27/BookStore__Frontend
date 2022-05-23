import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpService:HttpService) { }
  admin(reqData : any){
    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('Admin/Login', reqData, false, header);
  }
}
