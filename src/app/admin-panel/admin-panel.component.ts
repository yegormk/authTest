import { Component, OnInit } from '@angular/core';

import { userAssessment } from '../interfaces/responses.interfaces';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ['id', 'name', 'active'];
  dataSource!: userAssessment[];

  ngOnInit(): void {
    if (localStorage.getItem('role') === 'Admin') {
      this.dataSource = JSON.parse(localStorage.getItem('userAsses') || '');
    }
    console.log(JSON.parse(localStorage.getItem('userAsses') || ''));
  }
}
