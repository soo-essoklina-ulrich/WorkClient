import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Classe} from "../../models/classe/classe";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private classeUrl:string = "http://localhost:8081/timeapiv1/classe";
  constructor(
    private http: HttpClient
  ) { }

  public listClasse():Observable<Classe[]>{
    return this.http.get<Classe[]>(`${this.classeUrl}/list`);
  }

  public addClasse(classe:Classe):Observable<Classe>{
    return this.http.post<Classe>(`${this.classeUrl}/add`, classe);
  }

  public updateClasse(id:number, classe:Classe):Observable<Classe>{
    return this.http.put<Classe>(`${this.classeUrl}/update/${id}`, classe);
  }

  public deleteClasse(id:number):Observable<Classe>{
    return this.http.delete<Classe>(`${this.classeUrl}/delete/${id}`);
  }
}
