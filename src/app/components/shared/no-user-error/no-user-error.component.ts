import { Component } from '@angular/core';
import {SeparatorComponent} from "../separator/separator.component";

@Component({
  selector: 'app-no-user-error',
  standalone: true,
  imports: [
    SeparatorComponent
  ],
  templateUrl: './no-user-error.component.html',
  styleUrl: './no-user-error.component.less'
})
export class NoUserErrorComponent {
  message: string;
  constructor() {
    this.message = 'No user selected';
  }
}
