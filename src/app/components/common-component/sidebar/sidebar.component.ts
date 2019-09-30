import { Component, OnInit } from '@angular/core';
// import { SharedService } from '../../../../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // constructor(public SharedService: SharedService) { }
  constructor() { }

  ngOnInit() { }
  dataStatus_close() {
    // this.closeSidebar = false;
    // this.SharedService.sendStatus(this.closeSidebar);
  }

}
