import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../../models/Task";
import {FormsModule} from "@angular/forms";
import {TaskService} from "../../../services/task.service";
import {User} from "../../../models/users";

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.less'
})
export class TaskFormComponent implements OnInit {
  @Input({required: false}) task!: Task;
  @Input({required: true}) user!: User;
  @Input({required: true}) isUpdate!: boolean;
  @Output() cancelClickedEmitter: EventEmitter<Task> = new EventEmitter();
  @Output() submitTaskEmitter: EventEmitter<Task> = new EventEmitter();
  nameCtl!: string;
  descriptionCtl!: string;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    if(this.task === undefined || this.task === null || this.task.id === undefined){
      this.task = this.taskService.getEmptyTask(this.user.id);
    }
    this.nameCtl = this.task.name;
    this.descriptionCtl = this.task.description;
  }



  cancelClickHandler(){
    this.cancelClickedEmitter.emit();
  }

  saveTaskHandler($event:any) {
    this.task.name = this.nameCtl;
    this.task.description = this.descriptionCtl;
    this.submitTaskEmitter.emit(this.task);
  }
}
