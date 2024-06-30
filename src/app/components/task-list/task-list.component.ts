import {Component, Input} from '@angular/core';
import {User} from "../../models/users";
import {TaskComponent} from "./task/task.component";
import {Task} from "../../models/Task";
import {TaskFormComponent} from "./task-form/task-form.component";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TaskComponent,
    TaskFormComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.less'
})
export class TaskListComponent {
  @Input({required: false}) selectedUser!: User;
  isAddingTask = false;
  isUpdatingTask: boolean = false;
  currentTask!: Task;

  constructor(private taskService: TaskService) {
  }

  openNewTaskFormHandler() {
    this.isAddingTask = true;
  }

  openUpdateTaskFormHandler(task: Task) {
    this.currentTask = task;
    this.isUpdatingTask = true;
  }

  addNewTaskToUser(task: Task) {
    this.taskService.addNewTaskToUser(this.selectedUser, task);
    this.isAddingTask = false;
  }

  cancelDialogHandler(){
    this.isAddingTask = false;
    this.isUpdatingTask = false;
  }

  removeTask(task: Task) {
    this.taskService.removeTask(this.selectedUser, task);
  }

  updateTaskSubmit() {
    this.isUpdatingTask = false;
  }
}
