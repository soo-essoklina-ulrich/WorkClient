import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../../../models/user/Etudiant/etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiEtudiantUrl:String  = 'http://localhost:8081/timeapiv1/etudiant';
  constructor(
    private http: HttpClient
  ) { }

  getAllEtudiants(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(`${this.apiEtudiantUrl}/list`);
  }

  createEtudiant(etudiant: Etudiant): Observable<Etudiant>{
    return this.http.post<Etudiant>(`${this.apiEtudiantUrl}/add`, etudiant);
  }

  updateEtudiant(id:number, etudiant: Etudiant): Observable<Etudiant>{
    return this.http.put<Etudiant>(`${this.apiEtudiantUrl}/update/${id}`, etudiant);
  }

}
