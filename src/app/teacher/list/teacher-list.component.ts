import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../models/teacher';
import { TeacherService } from '../../services/teacher-services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
  }

  deleteTeacher(teacher: Teacher): void {
    this.teachers = this.teachers.filter(t => t !== teacher);
    this.teacherService.deleteTeacher(teacher.Id).subscribe();
    this.getTeachers();
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
  }
}
