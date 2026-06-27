import { Component, Signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = this.getRandomUser();

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  private getRandomUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    return DUMMY_USERS[randomIndex];
  }

  onSelectedUser() {
    // console.log("clicked!")
    // this.selectedUser = DUMMY_USERS[Math.floor(Math.random()* DUMMY_USERS.length)];
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = this.getRandomUser();
  }
}
