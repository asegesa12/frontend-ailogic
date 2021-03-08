import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userToken: string = "";

  constructor(private http: HttpClient,private router:Router,) { }


  URL:string = "https://internshipailogic.azurewebsites.net/api/Auth/login"


  login(User:User) {
    const AuthUser = {email:User.email,password:User.password}
   
    return this.http.post<any>(this.URL ,AuthUser);
  }

  
  private readToken() {
    let token = localStorage.getItem('token');
    if( token && token != 'undefined'){
      this.userToken = token;
    } else {
      this.userToken = '';
    }
    return this.userToken
  }

  private saveToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token',idToken);
    
    const today = new Date();
    today.setSeconds(3600);
    localStorage.setItem('expire', today.getDate().toString());

  }
}
