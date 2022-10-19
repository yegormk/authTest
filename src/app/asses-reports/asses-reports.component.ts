import { Component, OnInit } from '@angular/core';
import { ApiBaseService } from '../services/api-base.service';
import { Observable, Subscription } from 'rxjs';
import { userAssesment, userGraph } from '../interfaces/responses.interfaces';
import {Router} from "@angular/router";

@Component({
  selector: 'app-asses-reports',
  templateUrl: './asses-reports.component.html',
  styleUrls: ['./asses-reports.component.css'],
})
export class AssesReportsComponent implements OnInit {
  assesments!: userAssesment[];
  graphData!: userGraph;

  constructor(private service: ApiBaseService, private router: Router) {}

  ngOnInit(): void {}

  loadAssesments(): void {
    this.service.getAssesments().subscribe(
      res => {
        console.log(res);
        this.assesments = res;
      },
      err => console.log(err)
    );
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
}
