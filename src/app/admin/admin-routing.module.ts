import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {DashbordComponent} from "./adminmain/sectionmain/dashbord/dashbord.component";
import {AdmintableComponent} from "./adminmain/sectionmain/admintable/admintable.component";
import {FormadminComponent} from "./adminmain/sectionmain/formadmin/formadmin.component";
import {ProfilComponent} from "./adminmain/sectionmain/profil/profil.component";
import { TableComponent } from './adminmain/sectionmain/table/table.component';
import { AlltableComponent } from './adminmain/sectionmain/table/alltable/alltable.component';
import { ETudeTableComponent } from './adminmain/sectionmain/table/etude-table/etude-table.component';
import { EnsTableComponent } from './adminmain/sectionmain/table/ens-table/ens-table.component';
import {FormOtherComponent} from "./adminmain/sectionmain/form-other/form-other.component";
import {AnneeTableFormComponent} from "./adminmain/sectionmain/form-other/annee-table-form/annee-table-form.component";
import {
  ClasseTableFormComponent
} from "./adminmain/sectionmain/form-other/classe-table-form/classe-table-form.component";
import {CoursTableFormComponent} from "./adminmain/sectionmain/form-other/cours-table-form/cours-table-form.component";
import {
  MatiereTableFormComponent
} from "./adminmain/sectionmain/form-other/matiere-table-form/matiere-table-form.component";
import {AddpeopleComponent} from "./adminmain/sectionmain/formadmin/addpeople/addpeople.component";
import {AddworkingtimeComponent} from "./adminmain/sectionmain/formadmin/addworkingtime/addworkingtime.component";


const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: '',  redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: DashbordComponent},
      {path: 'admintable', component: AdmintableComponent},
      {path: 'tables', component: TableComponent,
        children: [
        { path: '',  redirectTo: 'all', pathMatch: 'full' },
        {path: 'all', component: AlltableComponent},
        {path: 'et', component: ETudeTableComponent},
        {path: 'en', component: EnsTableComponent}
      ]},
      {path: 'form', component: FormadminComponent,
        children: [
          { path: '',  redirectTo: 'people', pathMatch: 'full' },
          {path: 'people', component: AddpeopleComponent},
          {path: 'work', component: AddworkingtimeComponent},
        ]
      },
      {path: 'formO', component: FormOtherComponent,
        children: [
          { path: '',  redirectTo: 'all', pathMatch: 'full' },
          {path: 'an', component: AnneeTableFormComponent},
          {path: 'cl', component: ClasseTableFormComponent},
          {path: 'co', component: CoursTableFormComponent},
          {path: 'ma', component: MatiereTableFormComponent}
        ]
      },
      {path: 'profil', component: ProfilComponent}
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
