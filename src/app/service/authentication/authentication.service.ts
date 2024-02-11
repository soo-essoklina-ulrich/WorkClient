import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private fb: FormBuilder
  ) { }

  public buildFormLogin() {
    return this.fb.group({
      username: [''],
      password: ['']
    });
  }
}
