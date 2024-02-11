import { Component, OnInit } from '@angular/core';
import { FormulaireService } from '../../service/form/formulaire.service';
import { FormGroup } from '@angular/forms';
import {AdminService} from "../../service/user/AdminSerice/admin.service";
import {EnseignantService} from "../../service/user/EnseignantService/enseignant.service";
import {EtudiantService} from "../../service/user/EtudiantService/etudiant.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  form!: FormGroup



  constructor(
    private signup : FormulaireService,
    private adminService: AdminService,
    private enseignantService: EnseignantService,
    private etudiantService: EtudiantService
  ) { }

  ngOnInit(): void {
    this.buildFormCreateUser();
  }

  public buildFormCreateUser() {
    return this.form = this.signup.buildFormCreateUserbyAdmin();
  }

  Submit(){

    if ( this.form.value.role === 'ADMIN') {
      this.adminService.createAdmin(this.form.value).subscribe(
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
