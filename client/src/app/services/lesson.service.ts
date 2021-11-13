import { Lesson } from '../models/lesson';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class LessonService { 

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Lesson[]>(`${API}lesson`);
  }

  getById(id: string) {
    return this.http.get<Lesson>(`${API}lesson/${id}`);
  }

  save(lesson: Lesson) {
    const lessonBody = {
      title: lesson.title,
      description: lesson.description
    };

    if (lesson.id) {
      return this.http.put<Lesson>(`${API}lesson/${lesson.id}`, lessonBody);
    } else {
      return this.http.post<Lesson>(`${API}lesson`, lessonBody);
    }
  }

  delete(id: string) {
    return this.http.delete<Lesson>(`${API}lesson/${id}`);    
  }

}
