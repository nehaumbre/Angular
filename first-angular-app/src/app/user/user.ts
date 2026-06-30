import { Component, signal, computed } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = this.getRandomUser();
  // selectedUser = signal(this.getRandomUser()); // using signal to make selectedUser reactive

  get imagePath() {
    // return 'assets/users/' + this.selectedUser.avatar;
    return 'assets/users/' + this.selectedUser.avatar; //using signals
  }

  // imagePath = computed(() => 
  //   'assets/users/' + this.selectedUser().avatar
  // ); //!using signals and computed values

  private getRandomUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    return DUMMY_USERS[randomIndex];
  }

  onSelectedUser() {
    // console.log("clicked!")
    // this.selectedUser = DUMMY_USERS[Math.floor(Math.random()* DUMMY_USERS.length)];
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(this.getRandomUser());
    // * using signals to update the value of selectedUser use .set
    this.selectedUser = this.getRandomUser();
  }
}
