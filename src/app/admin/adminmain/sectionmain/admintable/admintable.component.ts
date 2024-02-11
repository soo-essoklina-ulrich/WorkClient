import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../../../models/user/user-details";
import {Column} from "../../../../interface/allinterface";
import {Admin} from "../../../../models/user/Admin/admin";
import {ConfirmationService, MessageService} from "primeng/api";
import {AdminService} from "../../../../service/user/AdminSerice/admin.service";

@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrl: './admintable.component.css',
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AdmintableComponent implements OnInit{
  userstable!: Admin[];

  user!: UserDetails | undefined;



  constructor(
    private adminservice: AdminService,

    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }

  cols!: Column[];


  infovisible: boolean = false;


  position : "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright" = 'right';

  ngOnInit(): void {

    this.adminservice.getAllAdmins().subscribe(
      (data)=>{
        this.userstable = data;
      },
      (error)=>{
        console.log("erreur de recuperation", error)
      }
    );


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
    } else {
      return "Inconnu"
    }
  }


  showDialoginfo(id: number) {
    this.infovisible = true;
    this.getuserinfobyid(id);
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



}
