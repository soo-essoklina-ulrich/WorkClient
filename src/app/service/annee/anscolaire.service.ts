import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Anscolaire} from "../../models/annee/anscolaire";

@Injectable({
  providedIn: 'root'
})
export class AnscolaireService {
  private anneeScolaireUrl:string = "http://localhost:8081/timeapiv1/anneeScolaire";
  constructor(
    private http: HttpClient
  ) { }

  public getAnneeScolaire():Observable<Anscolaire[]>{
    return this.http.get<Anscolaire[]>(`${this.anneeScolaireUrl}/list`);
  }

  public deleteAnneeScolaire(id:number):Observable<Anscolaire>{
    return this.http.delete<Anscolaire>(`${this.anneeScolaireUrl}/delete/${id}`);
  }

  public addAnneeScolaire(anscolaire:Anscolaire):Observable<Anscolaire>{
    return this.http.post<Anscolaire>(`${this.anneeScolaireUrl}/create`, anscolaire);
  }

  public updateAnneeScolaire(id:number, anscolaire:Anscolaire):Observable<Anscolaire>{
    return this.http.put<Anscolaire>(`${this.anneeScolaireUrl}/update/${id}`, anscolaire);
  }
}
