import { Injectable } from "@angular/core";
import { NewTask } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
    // Used for managing data and constant used by multiple components

    private tasks = [{
        id : 't1',
        userId : 'u1',
        title : 'Build a first proto type',
        summary: 'Build a first proto type of thge online website',
        dueDate: '2024-05-31',
        status: 'Created',
      },
    {
        id : 't11',
        userId : 'u1',
        title : 'Build a first proto type',
        summary: 'Build a first proto type of thge online website',
        dueDate: '2024-05-31',
        status: 'Created',
      },
      {
        id : 't2',
        userId : 'u2',
        title : 'Build a first proto type',
        summary: 'Build a first proto type of thge online website',
        dueDate: '2024-05-31',
        status: 'Created',
      },
      {
        id : 't3',
        userId : 'u2',
        title : 'Build a first proto type',
        summary: 'Build a first proto type of thge online website',
        dueDate: '2024-05-31',
        status: 'Created',
      },
      {
        id : 't4',
        userId : 'u3',
        title : 'Build a first proto type',
        summary: 'Build a first proto type of thge online website',
        dueDate: '2024-05-31',
        status: 'Created',
      }]

      getUserTasks(userId: string) {
        return this.tasks.filter((task)=> task.userId === userId);
      }

      addTask(taskData: NewTask, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
            status : 'Created'
        });
      }

      removeTask(id: string) {
        this.tasks= this.tasks.filter((task)=> task.id !== id);

      }
}