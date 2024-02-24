import { Component } from '@angular/core';
import {Classe} from "../../../../../models/classe/classe";
import {FormGroup} from "@angular/forms";
import {FormulaireService} from "../../../../../service/form/formulaire.service";
import {ClasseService} from "../../../../../service/classe/classe.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Matiere} from "../../../../../models/matiere/matiere";
import {MatiereService} from "../../../../../service/matiere/matiere.service";

@Component({
  selector: 'app-matiere-table-form',
  templateUrl: './matiere-table-form.component.html',
  styleUrl: './matiere-table-form.component.css',
  providers: [MessageService, ConfirmationService]
})
export class MatiereTableFormComponent {
  table!: Matiere[];
  data!: Matiere | undefined;
  form!: FormGroup;
  formupate!: FormGroup;
  editvisible!: boolean;


  constructor(
    private formservice: FormulaireService,
    private matiereservice: MatiereService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }
  ngOnInit(): void {
    this.getMatiere();
    this.buildFormCreate();
    this.buildFormUpdate()

  }

  buildFormCreate(){
    return this.form = this.formservice.buildFormMatiereCreate();
  }
  buildFormUpdate(){
    return this.formupate = this.formservice.buildFormMatiereUpdate();
  }


  getMatiere(){
    this.matiereservice.listMatiere().subscribe(
      (data)=>{
        this.table = data
      },
      (error)=>{
        console.log("recupere de matiere echoue ", error)
      }
    )
  }
  getuserinfobyid(id: number) {
    this.data = this.table.find(an  => an.id == id);

  }

  confirm(id:number) {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to proceed.',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        this.table.splice(this.table.findIndex(an => an.id == id), 1);
        try {
          this.matiereservice.deleteMatiere(id).subscribe(
            (response)=>{
              console.log(response)
            },
            (error)=>{
              console.log(error)
            }
          );
        }
        catch (e) {
          console.log(e);
        }},
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }

  showDialogtoedit(id: number) {

    this.getuserinfobyid(id);
    this.editvisible = true;
  }

  submitFormCreate() {
    this.matiereservice.addMatiere(this.form.value).subscribe(
      (response)=>{

        this.table.push(response)
      },
      (error)=>{
        console.log(error)
      }
    )
    this.form.reset()

  }
  submitFormUpdate(id: number) {
    const matiereindex = this.table.findIndex(an => an.id == id);
    if (matiereindex != -1) {
      this.formupate.value.code? this.table[matiereindex].code = this.formupate.value.code : null;
      this.formupate.value.intitule? this.table[matiereindex].intitule = this.formupate.value.intitule : null;
      try {
        this.matiereservice.updateMatiere(id, this.table[matiereindex]).subscribe(
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
    }
    this.formupate.reset();
  }

  closeDialog() {
    this.editvisible = false
  }
}
