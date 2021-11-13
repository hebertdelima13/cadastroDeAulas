import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { LessonFormComponent } from './views/lesson-form/lesson-form.component';
import { LessonListComponent } from './views/lesson-list/lesson-list.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'lesson', component: LessonListComponent},
  {path:'lesson/new', component: LessonFormComponent},
  {path:'lesson/edit/:id', component: LessonFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
