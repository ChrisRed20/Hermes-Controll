import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, NgIf],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  private simulatedUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];

  constructor() {}

  ngOnInit() {}

  login() {
    const user = this.simulatedUsers.find(
      (u) => u.username === this.username && u.password === this.password
    );
    if (user) {
      alert('Login successful!');
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}
