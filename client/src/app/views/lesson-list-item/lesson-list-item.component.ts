import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson-list-item',
  templateUrl: './lesson-list-item.component.html',
  styleUrls: ['./lesson-list-item.component.css']
})
export class LessonListItemComponent implements OnInit {

  @Input()
  lesson: Lesson;

  @Output() onDeleteLesson = new EventEmitter();

  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {
  }

  remove(lesson: Lesson) {    
    this.lessonService.delete(lesson.id).subscribe(() => {
      this.onDeleteLesson.emit(lesson)
    });
  }

}
