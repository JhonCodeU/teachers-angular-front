import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../../../models/teacher';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'https://teacher-mysql-resapi-production.up.railway.app/api/teacher';

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.body)
    );
  }

  getTeacher(id: number): Observable<Teacher> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.body)
    );
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<any>(this.apiUrl, teacher).pipe(
      map(response => response.body)
    );
  }

  updateTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.put<any>(`${this.apiUrl}/${teacher.Id}`, teacher).pipe(
      map(response => response.body)
    );
  }

  deleteTeacher(id: number): Observable<Teacher> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.body)
    );
  }
}
