import { Component, signal, computed, Input, input, Output, EventEmitter, output, InputSignal } from '@angular/core';
import { DUMMY_USERS } from '../dummy.users';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

//Defining type or interface which is a Type script functionality
// You can define other objects too..
type User = {
  id: string;
  avatar: string;
  name: string;
}

//Only to define object type
// interface UserType {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
/**
 * 

  // selectedUser =  DUMMY_USERS[randomIndex];
  selectedUser =  signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // On Execution of Events
  onSelectUser() {
    // console.log("Clicked!");
    // this.selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
  
  }


   */


  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;
  @Output() select = new EventEmitter<string>();


  //Defining the Object.
  @Input({ required: true}) user!: {
    id: string
    avatar: string
    name: string
  }

  @Input({required: true}) selected!: boolean;

  get imagePath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
    
  }

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();
  // imagePath = computed(() => {
  //   return './assets/users/' + this.avatar;
  // });

  // select = output<string>();

  onSelectUser() {
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
  

}
