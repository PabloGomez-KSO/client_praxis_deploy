import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { admissionsService } from './../../../services/admissionsService';
import { RouterModule, Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { helperService } from '../../../services/helperService';
import { Applicants } from '../../../schemas/applicants';
import { httpService } from '../../../services/httpService';
import { generalService } from '../../../services/generalService';

@Component({
  selector: 'app-adminmainmenu',
  templateUrl: './adminmainmenu.component.html',
  styleUrls: ['./adminmainmenu.component.css']
})
export class AdminmainmenuComponent implements OnInit {

  public index: number;
  public student: Applicants;
  public students: any = [];

  constructor(private router: Router, private sanitizer: DomSanitizer, private http: httpService, public generalService: generalService ) {

    this.generalService.statusNavBarInicial = true;
    this.generalService.statusNavBarMenuStudent = false;
    this.http.getStudentsForReview().subscribe( (data) => {

      const datos =JSON.parse(JSON.stringify(data));
      this.students = datos;

      this.ngOnInit();

      },
      (error) => {
        console.log("Error", error);
      }
    );
  }

  passIndexValue(student: Applicants) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        name: student.user.name,
        birthdate: student.user.birthdate,
        email: student.user.email,
        typeOfPraxis: student.typeOfPraxis,
        biography: student.user.biography,
        videoUrl: student.videoUrl,
        documentType: student.user.documentType,
        documentNumber: student.user.documentNumber,
        university: student.university,
        semester: student.semester,
        userId: student.userId
      }
  };
    this.student = student;
    this.router.navigate(['admin/admissions/information'], navigationExtras );
  }

  ngOnInit() {

  }

}
