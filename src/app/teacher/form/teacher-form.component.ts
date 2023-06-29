import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/models/teacher';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher-services/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
  newTeacher: Teacher = {
    Id: 0,
    cedula: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    email: ''
  };

  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const teacherId = params['id'];
      if (teacherId) {
        this.loadTeacher(teacherId);
        this.isEditMode = true;
      }
    });
  }

  loadTeacher(teacherId: number): void {
    this.teacherService.getTeacher(teacherId).subscribe(
      teacher => {
        this.newTeacher = teacher;
      },
      error => {
        console.log('Error loading teacher', error);
      }
    );
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (!this.isEditMode) {
      const teacher = this.newTeacher;
      this.teacherService.createTeacher(teacher).subscribe(
        teacher => {
          console.log('Teacher created', teacher);
          this.router.navigate(['/teachers']);
        }
      );
    } else {
      const teacher = this.newTeacher;
      this.teacherService.updateTeacher(teacher).subscribe(
        teacher => {
          console.log('Teacher updated', teacher);
          this.router.navigate(['/teachers']);
        }
      );
    }

  }
}
