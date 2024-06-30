import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskStatus} from "../../../models/TaskStatus";
import {TaskService} from "../../../services/task.service";
import {Task} from "../../../models/Task";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.less'
})
export class TaskComponent implements OnInit {
  protected readonly TaskStatus = TaskStatus;
  @Input({required: true}) taskId!: string;
  @Output() onUpdateClick: EventEmitter<string> = new EventEmitter();
  task!: Task;

  constructor(private taskService: TaskService, private userService: UserService) {}

  ngOnInit() {
    const task = this.taskService.findById(this.taskId);
    if(task === undefined || task === null) {
      return;
    }
    this.task = task;
  }

  switchTaskStatus(toStatus: TaskStatus) {
    this.taskService.updateTaskStatus(this.taskId, toStatus);
  }

  removeTaskClickHandler() {
    const task = this.taskService.findById(this.taskId);
    if(!task)
      return;
    this.taskService.removeTask(task.userId, task.id);
    this.userService.removeTask(task.userId, task.id);
  }

  updateTaskClickHandler() {
    this.onUpdateClick.emit(this.taskId);
  }
}
