import { Component, signal, computed, Input, input, Output, EventEmitter, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { Player } from './user.model';
import { Card } from '../shared/card/card';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// Type Aliases
// type Player = {
//     id: string;
//     avatar: string;
//     name: string;
//   }

// interface Player {
//     id: string;
//     avatar: string;
//     name: string;
//   }

@Component({
  imports: [Card],
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  //Decorator approach
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input ({required : true}) user! : Player
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;
  // select = output<string>(); //! using output function

  // Signal approach
  // avatar = input.required<string>(); // you can set it required too
  // name = input.required<string>();

  // imagePath = computed(() => `./assets/users/${this.avatar()}`);

  get imagePath() {
    return `./assets/users/${this.user.avatar}`;
  }

  onSelectedUser() {
    this.select.emit(this.user.id)
  }
}
