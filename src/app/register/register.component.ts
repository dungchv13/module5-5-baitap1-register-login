import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDetail} from '../model/user-detail';
import {PasswordValidator} from '../shared/password-validator';
import {UserServiceService} from '../service/user-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  users: UserDetail[] = [];


  constructor(private fb: FormBuilder,private userSv: UserServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.userSv.getUsers();
    this.registrationForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')]],
      password:['', [Validators.required,Validators.minLength(6)]],
      confirmPassword:[''],
      country:[''],
      birthday:[''],
      phone:['',[Validators.required,Validators.pattern('^\\d{10}$')]],
      gender:['male']
    }, {
      validator: PasswordValidator
    });
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  get phone(){
    return this.registrationForm.get('phone');
  }

  onSubmit() {
    let userDetail = this.registrationForm.value;
    console.log(userDetail);
    this.userSv.register(userDetail);
    this.users.push(userDetail);
    this.router.navigateByUrl("/login");
  }
}
