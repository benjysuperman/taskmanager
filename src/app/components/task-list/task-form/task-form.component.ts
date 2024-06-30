import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../../models/Task";
import {FormsModule} from "@angular/forms";
import {TaskService} from "../../../services/task.service";

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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.isUpdate = this.taskId === undefined;
    if(!this.isUpdate){
      this.task = this.taskService.getEmptyTask(this.userId);
    }
    this.nameCtl = this.task.name;
    this.descriptionCtl = this.task.description;
  }

  cancelClickHandler(){
    this.cancelClickedEmitter.emit();
  }

  saveTaskHandler() {
    !this.isUpdate ? this.taskService.addNewTaskToUser(this.userId, this.task) : this.taskService.updateTaskToUser(this.taskId, {name: this.nameCtl, description: this.descriptionCtl});
    this.cancelClickedEmitter.emit();
  }
}
