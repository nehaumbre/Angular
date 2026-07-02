import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserName = 'Jasmine Washington';

  onSelectUser(id: string) {
    this.selectedUserName = this.users.find((user) => user.id === id)?.name ?? '';
  }
}
