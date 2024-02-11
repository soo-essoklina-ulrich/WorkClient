import { Component } from '@angular/core';
import {FormulaireService} from "../../../../service/form/formulaire.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {FormGroup} from "@angular/forms";
import {choice} from "../../../../interface/allinterface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class TableComponent {


  constructor()
  {

  }


}
