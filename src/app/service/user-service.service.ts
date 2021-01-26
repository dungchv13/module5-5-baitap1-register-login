import { Injectable } from '@angular/core';
import {UserDetail} from '../model/user-detail';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private users: UserDetail[] = [];
  constructor() { }

  getUsers(){
    return this.users;
  }

  register(user: UserDetail){
    this.users.push(user);
  }
}
