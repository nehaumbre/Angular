import { Component,input, Output, EventEmitter } from '@angular/core';
import { type TaskData } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskData>();
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task().id);
  }
}
