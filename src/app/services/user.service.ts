import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserService {
  users: Array<any>;
  userSubject: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private _httpClient: HttpClient) {}

  resolve() {
    if (this.users?.length) {
      return;
    }
    return this.fetchUsers();
  }

  fetchUsers() {
    return this._httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        this.users = res as Array<any>;
        this.userSubject.next(this.users);
      });
  }

  addUser(user: any) {
    this.users = [...this.users, user];
    this.userSubject.next(this.users);
  }
}
