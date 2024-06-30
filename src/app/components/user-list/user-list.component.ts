import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserComponent} from "./user/user.component";
import {User} from "../../models/users";
import {NgForOf} from "@angular/common";
import {UserService} from "../../services/user.service";

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
export class UserListComponent {
  userList: User[];
  @Input({required: true}) activeUser!: User;
  @Output() onSelectUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userService: UserService) {
    this.userList = this.userService.getAllUsers();
  }
  newUserSelectedHandler(user: User) {
    this.activeUser = user;
    this.onSelectUser.emit(user);
  }
}
