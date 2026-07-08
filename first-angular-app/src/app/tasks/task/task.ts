import { Component,input, Output, EventEmitter, inject } from '@angular/core';
import { type TaskData } from './task.model';
import { Card } from '../../shared/card/card';
import {DatePipe} from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskData>();
  // @Output() complete = new EventEmitter<string>();
  private taskService = inject(TasksService);

  onCompleteTask(){
    this.taskService.removeTask(this.task().id);
  }
}
