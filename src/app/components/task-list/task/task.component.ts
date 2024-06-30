import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../models/Task";
import {TaskStatus} from "../../../models/TaskStatus";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.less'
})
export class TaskComponent {
  protected readonly TaskStatus = TaskStatus;
  @Input({required: true}) task!: Task;
  @Output() removeTaskClickEmitter:EventEmitter<Task> = new EventEmitter();
  @Output() updateTaskClickEmitter:EventEmitter<Task> = new EventEmitter();

  switchTaskStatus(toStatus: TaskStatus) {
    this.task.status = toStatus;
  }

  removeTaskClickHandler(task: Task) {
    this.removeTaskClickEmitter.emit(task);
  }

  updateTaskClickHandler(task: Task) {
    this.updateTaskClickEmitter.emit(task);
  }
}
