import {Injectable} from '@angular/core';
import {Task} from "../models/Task";
import {UpdateTaskModel} from "../models/UpdateTaskModel";
import {TaskStatus} from "../models/TaskStatus";
import {tasks as importedTasks} from "./datas/tasks/tasks";
import {AddTaskModel} from "../models/AddTaskModel";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly tasks!: Task[];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks === null){
      this.tasks = importedTasks;
    } else {
      console.log("From LS");
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasksToLS(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  getTasksByUserId(userId: string): Task[] {
    return this.tasks.filter( t => t.userId === userId );
  }

  removeTask(userId: string, taskId: string) {
    const index = this.tasks.findIndex(t => t.id === taskId);
    this.tasks.splice(index, 1);
    this.saveTasksToLS();
  }

  addNewTask(userId: string, task: Task, fields: AddTaskModel) {
    task.userId = userId;
    task.name = fields.name;
    task.description = fields.description;
    this.tasks.unshift(task);
    this.saveTasksToLS();
  }

  findById(taskId: string) {
    return this.tasks.find( t => t.id === taskId);
  }

  updateTask(taskId: string, updatedTask:UpdateTaskModel) {
    const task = this.findById(taskId);
    if(!task){
      return;
    }
    task.name = updatedTask.name;
    task.description = updatedTask.description;
    this.saveTasksToLS();
  }

  getEmptyTask(userId: string): Task {
    return new Task(userId, "","");
  }

  updateTaskStatus(taskId: string, toStatus: TaskStatus) {
    const task = this.findById(taskId);
    if(!task){
      return;
    }
    task.status = toStatus;
    this.saveTasksToLS();
  }
}
