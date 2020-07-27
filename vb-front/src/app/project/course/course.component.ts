import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() image: string;
  @Input() detail: string;

  constructor() { }

  ngOnInit(): void {
  }

}