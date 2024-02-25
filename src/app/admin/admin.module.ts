import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { FooterComponent } from './footer/footer.component';
import { PagetitleComponent } from './adminmain/pagetitle/pagetitle.component';
import { SectionmainComponent } from './adminmain/sectionmain/sectionmain.component';
import { DashbordComponent } from './adminmain/sectionmain/dashbord/dashbord.component';
import {AlltableComponent} from "./adminmain/sectionmain/table/alltable/alltable.component";
import { AdmintableComponent } from './adminmain/sectionmain/admintable/admintable.component';
import { FormadminComponent } from './adminmain/sectionmain/formadmin/formadmin.component';
import { ProfilComponent } from './adminmain/sectionmain/profil/profil.component';
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import { TableComponent } from './adminmain/sectionmain/table/table.component';
import { EnsTableComponent } from './adminmain/sectionmain/table/ens-table/ens-table.component';
import { ETudeTableComponent } from './adminmain/sectionmain/table/etude-table/etude-table.component';
import {PasswordModule} from "primeng/password";
import { FormOtherComponent } from './adminmain/sectionmain/form-other/form-other.component';
import { AnneeTableFormComponent } from './adminmain/sectionmain/form-other/annee-table-form/annee-table-form.component';
import { ClasseTableFormComponent } from './adminmain/sectionmain/form-other/classe-table-form/classe-table-form.component';
import { CoursTableFormComponent } from './adminmain/sectionmain/form-other/cours-table-form/cours-table-form.component';
import { MatiereTableFormComponent } from './adminmain/sectionmain/form-other/matiere-table-form/matiere-table-form.component';
import { CalendarModule } from 'primeng/calendar';
import { AddpeopleComponent } from './adminmain/sectionmain/formadmin/addpeople/addpeople.component';
import { AddworkingtimeComponent } from './adminmain/sectionmain/formadmin/addworkingtime/addworkingtime.component';



@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    AdminmainComponent,
    FooterComponent,
    PagetitleComponent,
    SectionmainComponent,
    DashbordComponent,
    AlltableComponent,
    AdmintableComponent,
    FormadminComponent,
    ProfilComponent,
    TableComponent,
    EnsTableComponent,
    ETudeTableComponent,
    FormOtherComponent,
    AnneeTableFormComponent,
    ClasseTableFormComponent,
    CoursTableFormComponent,
    MatiereTableFormComponent,
    AddpeopleComponent,
    AddworkingtimeComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        TableModule,
        RatingModule,
        TagModule,
        ButtonModule,
        TooltipModule,
        DialogModule,
        ToastModule,
        ConfirmDialogModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        InputNumberModule,
        DropdownModule,
        NgOptimizedImage,
        PasswordModule,
        CalendarModule
    ]
})
export class AdminModule { }
