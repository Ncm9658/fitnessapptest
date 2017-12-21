import { Component, OnInit } from '@angular/core';
import { LoginService } from '../models/login.service';
import { Player } from '../models/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginr',
  templateUrl: './loginr.component.html',
  styleUrls: ['./loginr.component.css']
})
  
export class LoginrComponent implements OnInit {
  name:string;
  password: string;

  constructor(private log: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.log.login(this.name, this.password)
  }
  loginFB(){
      this.log.loginFB();
  }
}
