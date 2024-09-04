import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { DUMMY_USERS } from './dummy.users';

// Decorator - Adds extra metadata - Converts this class into angular element <app-root> 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html', //Markup file renderered when <app-root> is used
  styleUrls: ['./app.component.css'], // CSS data - Inline/SingleFIle or multiple file
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('Selected user with id' + id);
  }
}
