import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "../../../models/user/Admin/admin";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiAdminUrl:String  = 'http://localhost:8081/timeapiv1/admin';
  constructor(
    private http: HttpClient
  ) { }

  getAllAdmins(){
    return this.http.get<Admin[]>(`${this.apiAdminUrl}/list`);
  }

  createAdmin(admin: Admin):Observable<Admin>{
    return this.http.post<Admin>(`${this.apiAdminUrl}/add`, admin);
  }

  updateAdmin(id:number, admin: Admin):Observable<Admin>{
    return this.http.put<Admin>(`${this.apiAdminUrl}/update/${id}`, admin);
  }
}
