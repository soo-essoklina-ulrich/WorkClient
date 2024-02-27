import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from './../../service/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {UserDetails} from "../../models/user/user-details";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  private defaultAdmin = {
    username: 'admin',
    password: 'admin'
  };
  private allUser!:UserDetails[]


  login!: FormGroup;

  constructor(
    private loginForm: AuthenticationService,
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.buildFormLogin();
    this.userService.getAllUser().subscribe(
      (data)=>{
        this.allUser = data

      },
      (error)=>{
        console.log("recupere de cours echoue ", error)
      })
  }

  private buildFormLogin(): FormGroup {
    return this.login = this.loginForm.buildFormLogin();
  }
  Submit() {

    const username = this.login.value.username;
    const password = this.login.value.password;

    //verification de l'utilisateur
    if (this.login.value.username === this.defaultAdmin.username && this.login.value.password === this.defaultAdmin.password) {
      this.route.navigate(['/admin']);
    }else if (this.allUser && this.allUser.length > 0) {
      const user = this.allUser.find(user => user.username === username && user.password === password);
      if (user?.role === 'ENSEIGNANT' ) {
        this.route.navigate(['/ens']);
      }else if (user?.role === 'ETUDIANT') {
        this.route.navigate(['/etude']);
      }else if (user?.role === 'ADMIN') {
        this.route.navigate(['/admin']);
      }else {
        console.log('Login failed !! user not exist');
      }
    }else {
      console.log('Login failed');
    }

  }
}
