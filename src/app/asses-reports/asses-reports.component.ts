import { Component, OnInit } from '@angular/core';
import { ApiBaseService } from '../services/api-base.service';

import { userAssessment } from '../interfaces/responses.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asses-reports',
  templateUrl: './asses-reports.component.html',
  styleUrls: ['./asses-reports.component.css'],
})
export class AssesReportsComponent implements OnInit {
  assessments!: userAssessment[];

  constructor(private service: ApiBaseService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.service.getAssessments().subscribe(
        res => {
          this.assessments = res;
        },
        err => console.log(err)
      );
    }
  }

  openGraph(id: number): void {
    this.service.getGraph(String(id)).subscribe(
      res => {
        console.log(res);
        this.service.currentGraph = res;
        this.router.navigate(['/graph']);
      },
      err => console.log(err)
    );
  }

  logOut() {
    this.service.logOut();
    this.router.navigate(['/home']);
  }
}
