import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDetails} from "../../models/user/user-details";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl:string = "http://localhost:8081/timeapiv1/user";

  constructor(
    private http: HttpClient
  ) { }

  getAllUser(): Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>(`${this.userUrl}/all`)
  }

  createUser(user: UserDetails): Observable<UserDetails>{
    return this.http.post<UserDetails>(`${this.userUrl}/create`, user)
  }

  updateUser(id:number, user: UserDetails): Observable<UserDetails>{
    return this.http.put<UserDetails>(`${this.userUrl}/update/${id}`, user)
  }
}
