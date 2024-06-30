import {Component, Input} from '@angular/core';
import {TaskStatus} from "../../../models/TaskStatus";
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.less'
})
export class TaskComponent {
  protected readonly TaskStatus = TaskStatus;
  @Input({required: true}) taskId!: string;

  constructor(private taskService: TaskService) {
  }

  switchTaskStatus(toStatus: TaskStatus) {
    this.taskService.updateTaskStatus(this.taskId, toStatus);
  }

  removeTaskClickHandler() {
    const task = this.taskService.findById(this.taskId);
    if(!task)
      return;
    this.taskService.removeTask(task.userId, task.id);
  }
}
