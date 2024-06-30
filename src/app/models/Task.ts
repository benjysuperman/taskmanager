import {TaskStatus} from "./TaskStatus";
import {RandomHelper} from "../helpers/random-helper";

export class Task {

  id: string;
  name: string;
  createdAt: Date;
  description: string;
  status: TaskStatus;
  userId: string;

  constructor(userId: string, name: string, description: string) {
    this.id = RandomHelper.generateUUID();
    this.name = name;
    this.createdAt = new Date();
    this.description = description;
    this.status = TaskStatus.OPEN;
    this.userId = userId;
  }

  get dateFormatted(){
    return this.createdAt.toLocaleDateString() + " at " + this.createdAt.toLocaleTimeString([], {hour: "2-digit", "minute": "2-digit"});
  }
}
