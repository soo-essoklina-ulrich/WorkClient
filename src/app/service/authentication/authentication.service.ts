import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private fb: FormBuilder
  ) { }

  public buildFormLogin() {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
