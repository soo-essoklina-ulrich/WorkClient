import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Matiere} from "../../models/matiere/matiere";

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private matiereUrl:string = "http://localhost:8081/timeapiv1/matiere";
  constructor(
    private http: HttpClient
  ) { }

  public listMatiere():Observable<Matiere>{
    return this.http.get<Matiere>(`${this.matiereUrl}/list`);
  }

  public addMatiere(matiere:Matiere):Observable<Matiere>{
    return this.http.post<Matiere>(`${this.matiereUrl}/add`, matiere);
  }

  public updateMatiere(id:number, matiere:Matiere):Observable<Matiere>{
    return this.http.put<Matiere>(`${this.matiereUrl}/update/${id}`, matiere);
  }

  public deleteMatiere(id:number):Observable<Matiere>{
    return this.http.delete<Matiere>(`${this.matiereUrl}/delete/${id}`);
  }
}
