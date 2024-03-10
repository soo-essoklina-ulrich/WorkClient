import {Component, OnInit} from '@angular/core';
import {Matiere} from "../../../../../models/matiere/matiere";
import {Anscolaire} from "../../../../../models/annee/anscolaire";
import {FormGroup} from "@angular/forms";
import {FormulaireService} from "../../../../../service/form/formulaire.service";

import {ConfirmationService, MessageService} from "primeng/api";
import {Cours} from "../../../../../models/cours/cours";
import {CoursService} from "../../../../../service/cours/cours.service";
import {Enseignant} from "../../../../../models/user/Enseignant/enseignant";
import {Classe} from "../../../../../models/classe/classe";
import {MatiereService} from "../../../../../service/matiere/matiere.service";
import {AnscolaireService} from "../../../../../service/annee/anscolaire.service";
import {ClasseService} from "../../../../../service/classe/classe.service";
import {EnseignantService} from "../../../../../service/user/EnseignantService/enseignant.service";

@Component({
  selector: 'app-cours-table-form',
  templateUrl: './cours-table-form.component.html',
  styleUrl: './cours-table-form.component.css',
  providers: [MessageService, ConfirmationService]
})
export class CoursTableFormComponent implements OnInit{
  table!: Cours[];
  data!: Cours | undefined;
  form!: FormGroup;
  formupate!: FormGroup;
  editvisible!: boolean;

  //data des objets essentiel
  Matieres!: Matiere[];
  Enseignants!: Enseignant[];
  Anneescolaire!: Anscolaire[];
  Classes!: Classe[];

  public inittable(){
    this.matiereservice.listMatiere().subscribe(
      (data)=>{
        this.Matieres = data
      },
      (error)=>{
        console.log("recupere de matiere echoue ", error)
      }
    )

    this.enseignantservice.getAllEnseignants().subscribe(
      (data)=>{
        this.Enseignants = data
      },
      (error)=>{
        console.log("recupere de matiere echoue ", error)
      }
    )

    this.anneescolaireservice.getAnneeScolaire().subscribe(
      (data)=>{
        this.Anneescolaire = data
      },
      (error)=>{
        console.log("recupere de matiere echoue ", error)
      }
    )

    this.classeservice.listClasse().subscribe(
      (data)=>{
        this.Classes = data
      },
      (error)=>{
        console.log("recupere de matiere echoue ", error)
      }
    )

  }


  constructor(
    private formservice: FormulaireService,
    private matiereservice: MatiereService,
    private anneescolaireservice: AnscolaireService,
    private classeservice: ClasseService,
    private enseignantservice: EnseignantService,
    private courservice: CoursService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }
  ngOnInit(): void {
    //initialisation des tableaux
    this.inittable();


    //other initialisation
    this.getCours();
    this.buildFormCreate();
    this.buildFormUpdate()

  }

  buildFormCreate(){
    return this.form = this.formservice.buildFormCoursCreate();
  }
  buildFormUpdate(){
    return this.formupate = this.formservice.buildFormCoursUpdate();
  }


  getCours(){
    this.courservice.listCours().subscribe(
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
          this.courservice.deleteCours(id).subscribe(
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
    console.log(this.form.value)
    this.courservice.addCours(this.form.value).subscribe(
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
    const coursindex = this.table.findIndex(an => an.id == id);
    if (coursindex != -1) {
      this.formupate.value.matiere? this.table[coursindex].matiere = this.formupate.value.matiere : null;
      this.formupate.value.enseignant? this.table[coursindex].enseigant = this.formupate.value.enseignant : null;
      this.formupate.value.classe? this.table[coursindex].classe = this.formupate.value.classe : null;
      this.formupate.value.anneeScolaire? this.table[coursindex].anneeScolaire = this.formupate.value.anneeScolaire : null;

      try {
        this.courservice.updateCours(id, this.table[coursindex]).subscribe(
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
