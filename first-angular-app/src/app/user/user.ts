import { Component, signal, computed, Input, input, Output, EventEmitter, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  //Decorator approach
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
  // select = output<string>(); //! using output function

  // Signal approach
  // avatar = input.required<string>(); // you can set it required too
  // name = input.required<string>();

  // imagePath = computed(() => `./assets/users/${this.avatar()}`);

  get imagePath() {
    return `./assets/users/${this.avatar}`;
  }

  onSelectedUser() {
    this.select.emit(this.id)
  }
}
