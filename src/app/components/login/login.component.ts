import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  Usuario: User = {
    nombre:"",
    email: "",
    password: ""
  }
  constructor(private Auth:LoginService) { }

  
  ngOnInit() {
    let token = localStorage.getItem('email');
    this.Usuario = new User();
    if(token){
      this.Usuario.email = token;
      
    }
    
  }
    
  login(form: NgForm) {
    this.Auth.login(this.Usuario).subscribe(resp => {
      localStorage.setItem('token',resp['token'])
          console.log(resp['token'])
    })
    
  }
}
