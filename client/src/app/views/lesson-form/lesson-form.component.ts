import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from 'src/app/models/lesson';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {
  lesson: Lesson = new Lesson();
  title: string = 'Nova aula';
  description: string = 'Nova descrição';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private lessonService: LessonService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');    
    if (id) {
      this.lessonService.getById(id).subscribe(lesson => {
        this.lesson = lesson;
        this.title = 'Alterando aula';
        this.description = 'Alterando descrição';
      });
    }
  }

  onSubmit() {
    this.lessonService.save(this.lesson).subscribe(lesson => {
      console.log(lesson);
      this.router.navigate(['/lesson']);
    });
  }


}
