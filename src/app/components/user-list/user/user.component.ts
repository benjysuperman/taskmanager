import {Component, Input, Output} from '@angular/core';
import {User} from "../../../models/users";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) active!: boolean;
  get userProfile() { return "assets/img/users/" + this.user.picture;}
}
