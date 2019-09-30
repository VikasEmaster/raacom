import { Component, OnInit } from '@angular/core';
// import { SharedService } from '../../../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSidebar: boolean;

  // constructor(public SharedService: SharedService) {
  constructor() {
    // this.SharedService.searchData$.subscribe(data => {
    //   console.log('sidebar', data);
    //   this.openSidebar = data;
    // });
  }

  ngOnInit() {
  }
  dataStatus() {
    // this.openSidebar = !this.openSidebar;
    // this.SharedService.sendStatus(this.openSidebar);
  }
}
