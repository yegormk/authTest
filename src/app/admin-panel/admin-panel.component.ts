import { Component, OnInit } from '@angular/core';

import { listOfUsers } from '../interfaces/responses.interfaces';
import { ApiBaseService } from '../services/api-base.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  constructor(private service: ApiBaseService) {}
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'groups', 'deleteButtons'];
  dataSource!: listOfUsers[];

  ngOnInit(): void {
    if (localStorage.getItem('role') === 'Admin' && localStorage.getItem('listOfUsers') === null) {
      this.service.getUsers().subscribe();
    }
    this.dataSource = JSON.parse(localStorage.getItem('listOfUsers') || '');
  }

  deleteUser(element: any) {
    this.dataSource = this.dataSource.filter(e => e !== element);
    localStorage.setItem('listOfUsers', JSON.stringify(this.dataSource));
  }
}
