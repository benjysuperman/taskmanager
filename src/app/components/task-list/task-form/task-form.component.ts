import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../../models/Task";
import {FormsModule} from "@angular/forms";
import {TaskService} from "../../../services/task.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.less'
})
export class TaskFormComponent implements OnInit {
  @Input({required: false}) taskId!: string;
  @Input({required: true}) userId!: string;
  @Output() cancelClickedEmitter: EventEmitter<Task> = new EventEmitter();
  isUpdate!: boolean;
  nameCtl!: string;
  descriptionCtl!: string;
  task!: Task;

  constructor(private taskService: TaskService, private  userService: UserService) {}

  ngOnInit(): void {
    this.isUpdate = this.taskId !== undefined;
    if(!this.isUpdate){
      this.task = this.taskService.getEmptyTask(this.userId);
    } else {
      const task = this.taskService.findById(this.taskId);
      if(task === undefined || task === null) {
        return;
      }
      this.task = task;
    }
    this.nameCtl = this.task.name;
    this.descriptionCtl = this.task.description;
  }

  cancelClickHandler(){
    this.cancelClickedEmitter.emit();
  }

  saveTaskHandler() {
    if(!this.isUpdate){
      this.taskService.addNewTask(this.userId, this.task, {name: this.nameCtl, description: this.descriptionCtl});
      const user = this.userService.findById(this.userId);
      if(!user)
        return;
      user.tasks.unshift(this.task);
    } else {
      this.taskService.updateTask(this.taskId, {name: this.nameCtl, description: this.descriptionCtl});
    }
    this.cancelClickedEmitter.emit();
  }
}
