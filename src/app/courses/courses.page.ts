import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  courses = [
    { name: 'cours1', nbEtud: 3 },
    { name: 'cours2', nbEtud: 6 }
  ];

  constructor() { }

  ngOnInit() {
    console.log('j\'arrive sur la page des cours');
  }

  ionViewWillEnter() {
    console.log('je reviens sur la page des cours');
  }
}
