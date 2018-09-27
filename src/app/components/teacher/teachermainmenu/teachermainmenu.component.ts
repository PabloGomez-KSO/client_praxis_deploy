import { Component, OnInit } from '@angular/core';
import { generalService } from '../../../services/generalService';

@Component({
  selector: 'app-teachermainmenu',
  templateUrl: './teachermainmenu.component.html',
  styleUrls: ['./teachermainmenu.component.css']
})
export class TeachermainmenuComponent implements OnInit {

  constructor(public generalService: generalService) { 
      
      
    this.generalService.statusNavBarInicial = true;
    this.generalService.statusNavBarMenuStudent = false;


  }

  ngOnInit() {
  }

}
