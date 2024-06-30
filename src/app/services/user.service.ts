import { Injectable } from '@angular/core';
import {RandomHelper} from "../helpers/random-helper";
import {users, users as importedUsers} from "./datas/users/users";
import {User} from "../models/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly users: User[];

  constructor() {
    const users = localStorage.getItem('users');
    if(users === null){
      this.users = importedUsers;
    } else {
      this.users = JSON.parse(users);
    }
  }

  private saveUsersToLS(){
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  getRandomUser(){
    return this.users[RandomHelper.getRandomKeyFromArray(this.users.length)];
  }

  getAllUsers(){
    return this.users;
  }

  findById(userId: string) {
    return this.users.find( u => u.id === userId);
  }

  removeTask(userId: string, taskId: string) {
    const user = this.users.find( u => u.id === userId);
    if(!user){
      return;
    }
    let index = user.tasks.findIndex(t => t.id === taskId);
    user.tasks.splice(index, 1);
  }
}
