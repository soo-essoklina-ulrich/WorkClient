import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormulaireService} from "../../../../../service/form/formulaire.service";
import {AdminService} from "../../../../../service/user/AdminSerice/admin.service";
import {EnseignantService} from "../../../../../service/user/EnseignantService/enseignant.service";
import {EtudiantService} from "../../../../../service/user/EtudiantService/etudiant.service";

@Component({
  selector: 'app-addpeople',
  templateUrl: './addpeople.component.html',
  styleUrl: './addpeople.component.css'
})
export class AddpeopleComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fromService: FormulaireService,
    private adminservice: AdminService,
    private enseignantService: EnseignantService,
    private etudiantService: EtudiantService,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.form = this.fromService.buildFormCreateUserbyAdmin();
  }


  public onSubmit() {
    if ( this.form.value.role === 'ADMIN') {
      this.adminservice.createAdmin(this.form.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      console.log("admin control")
    }else if (this.form.value.role === 'ENSEIGNANT') {
      this.enseignantService.createEnseignant(this.form.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      console.log("enseignant control")
    }else if (this.form.value.role === 'ETUDIANT') {
      this.etudiantService.createEtudiant(this.form.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      console.log("etudiant control")
    }
    else {
      console.log("fack control")
    }
    this.form.reset();
  }

}
