import {Task} from "./Task";

export class User {
  id: string;
  name: string;
  tasks!: Task[];

  constructor(id:string, name:string) {
    this.id = id;
    this.name = name;
  }
  get picture() { return this.id + ".jpg"};
}
