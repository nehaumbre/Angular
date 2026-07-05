import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import {Task} from './tasks/task/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks, Task, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  // selectedUserName = 'Jasmine Washington';

  selectedUserName?: string;

   // by using ? we are saying that this property can be undefined, 
   // so we don't need to give it an initial value. It will be set when a user is selected.
  // Note that above we have given an initial value to selectedUserName = 'Jasmine Washington';
  onSelectUser(id: string) {
    this.selectedUserName = this.users.find((user) => user.id === id)?.name ?? '';
  }
}
