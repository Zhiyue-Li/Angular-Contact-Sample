import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private _userService: UserService) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this._userService.addUser(this.userForm.getRawValue());
    } else {
      // alert('Required field is empty!');
      console.log(this.userForm.errors);
    }
  }

  ngOnInit() {}
}
