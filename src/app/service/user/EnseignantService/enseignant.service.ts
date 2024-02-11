import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Enseignant} from "../../../models/user/Enseignant/enseignant";

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiEnseigantUrl:String  = 'http://localhost:8081/timeapiv1/enseignant';
  constructor(
    private http: HttpClient
  ) { }

  getAllEnseignants(): Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(`${this.apiEnseigantUrl}/list`);
  }

  createEnseignant(enseignant: Enseignant): Observable<Enseignant>{
    return this.http.post<Enseignant>(`${this.apiEnseigantUrl}/add`, enseignant);
  }

  updateEnseignant(id:number, enseignant: Enseignant): Observable<Enseignant>{
    return this.http.put<Enseignant>(`${this.apiEnseigantUrl}/update/${id}`, enseignant);
  }

}
