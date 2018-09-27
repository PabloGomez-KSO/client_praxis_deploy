import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { generalService } from '../../../services/generalService';


@Component({
  selector: 'app-mainmenu-navbar',
  templateUrl: './mainmenu-navbar.component.html',
  styleUrls: ['./mainmenu-navbar.component.css']
})
export class MainmenuNavbarComponent implements OnInit {

  constructor(public generalService: generalService,  public router: Router) {

       console.log(this.generalService.statusNavBarMenuStudent);

  }

  ngOnInit() {
  }


  logOut(){
      localStorage.removeItem('token');
      this.generalService.setstatusNavBarInicial(false);
      this.generalService.setstatusNavBarMenuStudent(true);

      this.router.navigate(['student/login']);

  }

}
