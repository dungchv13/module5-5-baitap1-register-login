import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserServiceService} from '../service/user-service.service';
import {UserDetail} from '../model/user-detail';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  users: UserDetail[] = [];
  msg = '';
  constructor(private fb: FormBuilder,private userSv: UserServiceService) { }

  ngOnInit(): void {
    this.users = this.userSv.getUsers();
    this.LoginForm = this.fb.group({
      email:[''],
      password:['']
    });
  }
  get email(){
    return this.LoginForm.get('email')!;
  }
  get password(){
    return this.LoginForm.get('password')!;
  }
  onSubmit() {
    for(let i = 0;i < this.users.length;i++){
      if(this.users[i].email == this.email.value && this.users[i].password == this.password.value ){
        this.msg = 'Login Success!!!!';
        return;
      }
    }
    this.msg = 'Login False!!!'
  }
}
