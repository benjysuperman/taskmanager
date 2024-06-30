import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {SeparatorComponent} from "../shared/separator/separator.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    SeparatorComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

  title: string;
  description: string;

  constructor() {
    this.title = "Task Manager";
    this.description = "Entreprise level tasks";
  }
}
