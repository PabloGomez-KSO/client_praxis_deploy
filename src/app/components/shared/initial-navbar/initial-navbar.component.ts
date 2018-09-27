import { Component, OnInit } from '@angular/core';
import { generalService } from '../../../services/generalService';



@Component({
  selector: 'app-initial-navbar',
  templateUrl: './initial-navbar.component.html',
  styleUrls: ['./initial-navbar.component.css']
})
export class InitialNavbarComponent implements OnInit {

  constructor(public generalService: generalService) {


  }

  ngOnInit() {
  }

}
