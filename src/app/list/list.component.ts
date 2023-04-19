import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: Array<any>;
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.userSubject.subscribe((users) => {
      this.users = users;
    });
  }
}
