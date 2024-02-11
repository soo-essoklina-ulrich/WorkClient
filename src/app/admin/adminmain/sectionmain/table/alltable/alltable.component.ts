import {Component, Input, OnInit} from '@angular/core';
import {UserDetails} from "../../../../../models/user/user-details";
import {FormGroup} from "@angular/forms";
import {UserService} from "../../../../../service/user/user.service";
import {FormulaireService} from "../../../../../service/form/formulaire.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {choice, Column} from "../../../../../interface/allinterface";





@Component({
  selector: 'app-alltable',
  templateUrl: './alltable.component.html',
  styleUrl: './alltable.component.css',
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AlltableComponent implements OnInit{
  userstable!: UserDetails[];

  user!: UserDetails | undefined;

  optionsDeChoix: choice[] = [
    {role:'ADMIN'},
    {role:'ENSEIGNANT'},
    {role:'ETUDIANT'}
  ];

  cols!: Column[];

  monFormulaire!: FormGroup;

  infovisible: boolean = false;

  editvisible: boolean = false;

  position : "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright" = 'right';

  constructor(
    private userService: UserService,
    private formservice: FormulaireService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {

    this.userService.getAllUser().subscribe(
      (data)=>{
        this.userstable = data;
      },
      (error)=>{
        console.log("erreur de recuperation", error)
      }
    );

    this.buildFormupdate();


    this.getUser();

    this.cols = [
      {field: 'nom', header: 'Nom'},
      {field: 'prenom', header: 'Prenom'},
      {field: 'email', header: 'Email'},
      {field: 'role', header: 'Role'},
      {field: 'telephone', header: 'Telephone'},
    ];
  }

  getUser(){
    return this.userstable;
  }


  getrole(status: string) {
    if (status == "ADMIN") {
      return "success"
    } else if (status == "ENSEIGNANT") {
      return "warning"
    } else if (status == "ETUDIANT") {
      return ""
    } else {
      return "Inconnu"
    }
  }
  getstatus(status: string) {
    return status == "ADMIN";
  }

  showDialoginfo(id: number) {
    this.infovisible = true;
    this.getuserinfobyid(id);
  }
  showDialogtoedit(id: number) {

    this.getuserinfobyid(id);
    this.editvisible = true;
  }

  closeDialog() {
    this.editvisible = false;
  }

  getuserinfobyid(id: number) {
    this.user = this.userstable.find(user => user.id == id);

  }

  confirm(id:number) {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to proceed.',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        this.userstable.splice(this.userstable.findIndex(user => user.id == id), 1);
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }

  private buildFormupdate() {
    this.monFormulaire = this.formservice.buildFormUpdateUserbyAdmin();
  }


  submitForm(id:number) {
    const userindex = this.userstable.findIndex(user => user.id == id);
    if (userindex != -1) {
        this.monFormulaire.value.nom? this.userstable[userindex].nom = this.monFormulaire.value.nom : null;
        this.monFormulaire.value.prenom? this.userstable[userindex].prenom = this.monFormulaire.value.prenom : null;
        this.monFormulaire.value.numeromatricule? this.userstable[userindex].numeromatricule = this.monFormulaire.value.matricule : null;
        this.monFormulaire.value.email? this.userstable[userindex].email = this.monFormulaire.value.email : null;
        this.monFormulaire.value.role? this.userstable[userindex].role = this.monFormulaire.value.role : null;
        this.monFormulaire.value.telephone? this.userstable[userindex].telephone = this.monFormulaire.value.telephone : null;
      try {
        this.userService.updateUser(id, this.monFormulaire.value).subscribe(
          (response)=>{
            console.log(response)
          },
          (error)=>{
            console.log(error)
          }
        );
      }catch (e) {
        console.log(e)
      }
    }else {
      console.log("erreur de recuperation")
    }


    this.monFormulaire.reset();
    this.editvisible = false;
  }

}
