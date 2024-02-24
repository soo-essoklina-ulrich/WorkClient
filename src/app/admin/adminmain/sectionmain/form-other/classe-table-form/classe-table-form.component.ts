import {Component} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {FormGroup} from "@angular/forms";
import {FormulaireService} from "../../../../../service/form/formulaire.service";
import {ClasseService} from "../../../../../service/classe/classe.service";
import {Classe} from "../../../../../models/classe/classe";


@Component({
  selector: 'app-classe-table-form',
  templateUrl: './classe-table-form.component.html',
  styleUrl: './classe-table-form.component.css',
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class ClasseTableFormComponent {
  table!: Classe[];
  data!: Classe | undefined;
  form!: FormGroup;
  formupate!: FormGroup;
  editvisible!: boolean;
  position: "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright" = 'right';

  constructor(
    private formservice: FormulaireService,
    private classeService: ClasseService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getClasse();
    this.buildFormCreate();
    this.buildFormUpdate()

  }

  buildFormCreate() {
    return this.form = this.formservice.buildFormClasseCreate()
  }

  buildFormUpdate() {
    return this.formupate = this.formservice.buildFormClasseUpdate()
  }


  getClasse() {
    this.classeService.listClasse().subscribe(
      (data) => {
        this.table = data
      },
      (error) => {
        console.log("recupere de classe echoue ", error)
      }
    )
  }

  getuserinfobyid(id: number) {
    this.data = this.table.find(an => an.id == id);

  }

  confirm(id: number) {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to proceed.',
      accept: () => {
        this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000});
        this.table.splice(this.table.findIndex(an => an.id == id), 1);
        try {
          this.classeService.deleteClasse(id).subscribe(
            (response) => {
              console.log(response)
            },
            (error) => {
              console.log(error)
            }
          );
        } catch (e) {
          console.log(e);
        }
      },
      reject: () => {
        this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
      }
    });
  }

  showDialogtoedit(id: number) {

    this.getuserinfobyid(id);
    this.editvisible = true;
  }

  submitFormCreate() {
    this.classeService.addClasse(this.form.value).subscribe(
      (response) => {

        this.table.push(response)
      },
      (error) => {
        console.log(error)
      }
    )
    this.form.reset()

  }

  submitFormUpdate(id: number) {
    const classeindex = this.table.findIndex(an => an.id == id);
    if (classeindex != -1) {
      this.formupate.value.code ? this.table[classeindex].code = this.formupate.value.code : null;
      this.formupate.value.intitule ? this.table[classeindex].intitule = this.formupate.value.intitule : null;
      try {
        this.classeService.updateClasse(id, this.table[classeindex]).subscribe(
          (response) => {
            console.log(response)
          },
          (error) => {
            console.log(error)
          }
        );
      } catch (e) {
        console.log(e)
      }
    }
    this.formupate.reset();


  }

  closeDialog() {
    this.editvisible = false
  }
}
