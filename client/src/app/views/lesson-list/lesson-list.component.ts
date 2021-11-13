import { LessonService } from 'src/app/services/lesson.service'
import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  lessons: Lesson[] = [];

  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {
    this.lessonService.getAll().subscribe(lessons => { 
      this.lessons = lessons;
    });
  }

  onLessonDeleted(lesson: Lesson) {
    if (lesson) {
      const index = this.lessons.findIndex((lessonItem) => lessonItem.id == lesson.id);
      this.lessons.splice(index, 1);
    }
  }

}
