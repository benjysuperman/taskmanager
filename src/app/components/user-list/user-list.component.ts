import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserComponent} from "./user/user.component";
import {User} from "../../models/users";
import {NgForOf} from "@angular/common";
import {UserService} from "../../services/user.service";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.less'
})
export class UserListComponent implements OnInit {
  userList!: User[];
  @Input({required: false}) activeUser!: User;
  @Output() onSelectUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userService: UserService, private taskService: TaskService) {}

  ngOnInit() {
    this.userList = this.userService.getAllUsers();
    this.userList.forEach(u => u.tasks = this.taskService.getTasksByUserId(u.id));
  }

  newUserSelectedHandler(user: User) {
    this.activeUser = user;
    this.onSelectUser.emit(user);
  }
}
