import {Component} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";

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
