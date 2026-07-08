import { Component,input, Output, EventEmitter } from '@angular/core';
import { type TaskData } from './task.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  imports: [Card],
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
