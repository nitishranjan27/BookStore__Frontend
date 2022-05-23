import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseurl

  constructor(private httpclient : HttpClient) { }
  postService(url : string, reqdata : any, token : boolean=false, httpOptions : any ){
    // console.log("print values",reqdata);
    
    return this.httpclient.post(this.baseUrl+url,reqdata,token && httpOptions)
  }     
  getService(url : string, token : boolean=false, httpOptions : any){
    
    
    return this.httpclient.get(this.baseUrl+url, token && httpOptions)

  }
  putService(url : string, reqdata : any, token : boolean=true, httpOptions : any ){
    // console.log("print values",reqdata);
    
    return this.httpclient.put(this.baseUrl+url,reqdata,token && httpOptions)
  }
  deleteService(url : string, token : boolean=true, httpOptions : any ){
    // console.log("print values",reqdata);
    
    return this.httpclient.delete(this.baseUrl+url, token && httpOptions)
  }
  patchService(url : string,reqdata : any, token : boolean=true, httpOptions : any ){
    // console.log("print values",reqdata);
    
    return this.httpclient.patch(this.baseUrl+url,reqdata, token && httpOptions)
  }
}
