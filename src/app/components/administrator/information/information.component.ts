import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminmainmenuComponent } from './../adminmainmenu/adminmainmenu.component';
import { ActivatedRoute, Router } from '@angular/router';
import { helperService } from './../../../services/helperService';
import { generalService } from '../../../services/generalService';
import { httpService } from '../../../services/httpService';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  public students = [];
  public semester: any;
  public university: any;
  public name: any;
  public birthdate: any;
  public email: any;
  public password: any;
  public typeOfPraxis: any;
  public biography: any;
  public videoUrl: any;
  public documentType: any;
  public documentNumber: any;
  public userId: any;

  @ViewChild('video') video;

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  constructor(private AdminmainmenuComponent: AdminmainmenuComponent, private route: ActivatedRoute, private router: Router, private helperService: helperService, private sanitizer:  DomSanitizer,
   public generalService: generalService, public http: httpService ) {

     this.generalService.statusNavBarInicial = true;
     this.generalService.statusNavBarMenuStudent = false;


    this.route.queryParams.subscribe(params => {
    this.name = params['name'];
    this.birthdate = params['birthdate'];
    this.email = params['email'];
    // this.password = params['password'];
    this.typeOfPraxis = params['typeOfPraxis'];
    this.biography = params['biography'];
    this.documentType = params['documentType'];
    this.documentNumber = params['documentNumber'];
    this.university = params['university'];
    this.semester = params['semester'];
    this.userId = params['userId'];
    this.videoUrl = this.helperService.getFileUrl(this.email + '.mp4');
    // console.log(this.email);
    // console.log(this.name, 'ajsdasdasd');
    });
  }

  goToPrevStep(){
    this.router.navigate(['admin/admissions']);
  }

  acceptStudent(){
    this.http.AcceptOrRejectStudent(this.userId, true).subscribe(data => {
      console.log(data);
    });
  }

  denyStudent(){
    this.http.AcceptOrRejectStudent(this.userId, false).subscribe(data => {
       console.log(data);
    });
  }

  ngOnInit() {
  }

}
