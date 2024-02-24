import {Component, OnInit} from '@angular/core';
import {FormulaireService} from "../../../../../service/form/formulaire.service";
import {AnscolaireService} from "../../../../../service/annee/anscolaire.service";
import {Anscolaire} from "../../../../../models/annee/anscolaire";
import {FormGroup} from "@angular/forms";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-annee-table-form',
  templateUrl: './annee-table-form.component.html',
  styleUrl: './annee-table-form.component.css',
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AnneeTableFormComponent implements OnInit{
  table!: Anscolaire[];
  An!: Anscolaire | undefined;
  form!: FormGroup;
  formupate!: FormGroup;
  editvisible!: boolean;
  position : "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright" = 'right';

  constructor(
    private formservice: FormulaireService,
    private anneeservice: AnscolaireService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }
    ngOnInit(): void {
      this.getAnnescolaire();
      this.buildFormCreate();
      this.buildFormUpdate()

    }

    buildFormCreate(){
      return this.form = this.formservice.buildFormAnneScolaireCreate()
    }
    buildFormUpdate(){
      return this.formupate = this.formservice.builFormAnneScolaireUpdate()
    }


    getAnnescolaire(){
      this.anneeservice.getAnneeScolaire().subscribe(
      (data)=>{
        this.table = data
      },
     (error)=>{
        console.log("recupere de anne-sc echoue ", error)
     }
    )
    }
  getuserinfobyid(id: number) {
    this.An = this.table.find(an  => an.id == id);

  }

  confirm(id:number) {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to proceed.',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        this.table.splice(this.table.findIndex(an => an.id == id), 1);
        try {
          this.anneeservice.deleteAnneeScolaire(id).subscribe(
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
    this.anneeservice.addAnneeScolaire(this.form.value).subscribe(
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
    const anneeindex = this.table.findIndex(an => an.id == id);
    if (anneeindex != -1) {
      this.formupate.value.code? this.table[anneeindex].code = this.formupate.value.code : null;
      this.formupate.value.dateDebut? this.table[anneeindex].dateDebut = this.formupate.value.dateDebut : null;
      this.formupate.value.dateFin? this.table[anneeindex].dateFin = this.formupate.value.dateFin: null;

      try {
        this.anneeservice.updateAnneeScolaire(id, this.table[anneeindex]).subscribe(
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

    this.closeDialog();

  }

  closeDialog() {
    this.editvisible = false
  }
}
