import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './views/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LessonFormComponent } from './views/lesson-form/lesson-form.component';
import { LessonListComponent } from './views/lesson-list/lesson-list.component';
import { LessonListItemComponent } from './views/lesson-list-item/lesson-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LessonFormComponent,
    LessonListComponent,
    LessonListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
