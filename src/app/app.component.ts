import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {TaskListComponent} from "./components/task-list/task-list.component";
import {User} from "./models/users";
import {NoUserErrorComponent} from "./components/shared/no-user-error/no-user-error.component";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserListComponent,
    TaskListComponent,
    NoUserErrorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Task manager';
  selectedUser: User;

  constructor(
    private userService:UserService) {
    this.selectedUser = userService.getRandomUser();
  }

  onSelectedUser(user: User) {
    this.selectedUser = user;
  }
}
