import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher/list/teacher-list.component';
import { TeacherFormComponent } from './teacher/form/teacher-form.component';


const routes: Routes = [
  { path: 'teachers', component: TeacherListComponent }
  , { path: 'teachers/create', component: TeacherFormComponent },
  { path: 'teachers/edit/:id', component: TeacherFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
