import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COMMON_MSG } from 'src/app/common/messages/common-msg';
import { LoginOptions } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  loginData: LoginOptions = {};
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onFormSubmit(event: any) {
    localStorage.setItem(COMMON_MSG.loginUser, JSON.stringify(this.loginData));
    this.router.navigate(['/login/registration-details']);
  }
  valueChanged(event: any, text: string) {
    if (text === COMMON_MSG.email) {
      this.loginData.email = event.value;
    } else {
      this.loginData.password = event;
    }
  }
}
