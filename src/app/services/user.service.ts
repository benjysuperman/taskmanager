import { Injectable } from '@angular/core';
import {User} from "../models/users";
import {RandomHelper} from "../helpers/random-helper";
import {TaskService} from "./task.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    new User("u1", "Bart"),
    new User("u2", "Naomi"),
    new User("u3", "Irene"),
    new User("u4", "Johan"),
    new User("u5", "Melusine"),
    new User("u6", "Marcel"),
    new User("u7", "Agatha"),
    new User("u8", "Paloma"),
    new User("u9", "Douja"),
    new User("u10", "Linea"),
    new User("u11", "Sofia"),
  ];

  constructor(private taskService: TaskService) {
    this.users.forEach( u => u.tasks = taskService.getTasksByUserId(u.id));
  }

  getRandomUser(){
    return this.users[RandomHelper.getRandomKeyFromArray(this.users.length)];
  }

  getAllUsers(){
    return this.users;
  }
}
