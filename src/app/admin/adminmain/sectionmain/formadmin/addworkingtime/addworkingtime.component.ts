import {Component, OnInit} from '@angular/core';
import {FormulaireService} from "../../../../../service/form/formulaire.service";
import {FormGroup} from "@angular/forms";
import {Cours} from "../../../../../models/cours/cours";
import {CoursService} from "../../../../../service/cours/cours.service";
import {EmploietpsService} from "../../../../../service/emploietemps/emploietps.service";

@Component({
  selector: 'app-addworkingtime',
  templateUrl: './addworkingtime.component.html',
  styleUrl: './addworkingtime.component.css'
})
export class AddworkingtimeComponent implements OnInit
{
  form!: FormGroup;

  cours!: Cours[];

//data des objets essentiel
  private initiablize(){
    this.coursService.listCours().subscribe(
      (data)=>{
        this.cours = data
        console.log(this.cours)
      },
      (error)=>{
        console.log("recupere de cours echoue ", error)
      }
    )

  }

    ngOnInit(): void {
      this.buildFormEmploie();
      this.initiablize();
      console.log(this.cours)
    }

    constructor
    (
      private formservice: FormulaireService,
      private emploietpsservice: EmploietpsService,
      private coursService: CoursService,

    )
    {

    }

    buildFormEmploie(){
      this.form = this.formservice.buildFormEmploisCreate();
    }

  onSubmit() {
    console.log(this.form.value);
    const data = []
    data.push(this.form.value)
    console.log(data)

    /*this.emploietpsservice.addEmploietemps(this.form.value).subscribe(
      (data)=>{
        console.log("ajout de emploie reussi ", data)
      },
      (error)=>{
        console.log("ajout de emlpoie echoue ", error)
      }
    )*/

  }
}
