import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cours} from "../../models/cours/cours";

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private coursUrl:string = "http://localhost:8081/timeapiv1/cours";
  constructor(
    private http: HttpClient
  ) { }

  public listCours():Observable<Cours>{
    return this.http.get<Cours>(`${this.coursUrl}/list`);
  }

  public addCours(cours:Cours):Observable<Cours>{
    return this.http.post<Cours>(`${this.coursUrl}/add`, cours);
  }

  public updateCours(id:number, cours:Cours):Observable<Cours>{
    return this.http.put<Cours>(`${this.coursUrl}/update/${id}`, cours);
  }

  public deleteCours(id:number):Observable<Cours>{
    return this.http.delete<Cours>(`${this.coursUrl}/delete/${id}`);
  }
}
