import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private _router: Router, private _userService: UserService) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this._userService.addUser(this.userForm.getRawValue());
      this._router.navigate(['/']);
    } else {
      // alert('Required field is empty!');
      console.log(this.userForm.getError('name'));
    }
  }

  ngOnInit() {}
}
