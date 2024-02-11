import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from './../../service/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  login!: FormGroup;

  constructor(
    private loginForm: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.buildFormLogin();
  }

  private buildFormLogin(): FormGroup {
    return this.login = this.loginForm.buildFormLogin();
  }
  Submit() {
  throw new Error('Method not implemented.');
  }
}
