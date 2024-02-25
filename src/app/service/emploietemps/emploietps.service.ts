import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Emploietps} from "../../models/emploietemps/emploietps";

@Injectable({
  providedIn: 'root'
})
export class EmploietpsService {
  private emploietempsUrl:string = "http://localhost:8081/timeapiv1/emploie";
  constructor(
    private http: HttpClient
  ) { }

  public listEmploietemps():Observable<Emploietps[]>{
      return this.http.get<Emploietps[]>(`${this.emploietempsUrl}/all`);
  }

  public addEmploietemps(emploietps:Emploietps):Observable<Emploietps>{
      return this.http.post<Emploietps>(`${this.emploietempsUrl}/add`, emploietps);
  }

  public updateEmploietemps(id:number, emploietps:Emploietps):Observable<Emploietps>{
      return this.http.put<Emploietps>(`${this.emploietempsUrl}/update/${id}`, emploietps);
  }

  public deleteEmploietemps(id:number):Observable<Emploietps>{
      return this.http.delete<Emploietps>(`${this.emploietempsUrl}/delete/${id}`);
  }

}
