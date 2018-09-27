import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { helperService } from '../../../services/helperService';
import { Student } from '../../../schemas/student';
import { httpService } from '../../../services/httpService';
import { storageVideoService } from '../../../services/storagevideoService';
import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';

@Component({
  selector: 'app-validatedata',
  templateUrl: './validatedata.component.html',
  styleUrls: ['./validatedata.component.css']
})
export class ValidatedataComponent implements OnInit {


  public urlvideo: any;
  public mensaje: string;
  public student: Student;
  public step: number;

  constructor(private router: Router, private sanitizer:  DomSanitizer,
     private helperService: helperService, private http: httpService,
      private storageS: storageVideoService, private popup: BootstrapAlertService ) {
       this.student = this.helperService.getStudentOfSignUp();

  }

  @ViewChild('video') video;

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
    this.step = this.helperService.getStepValidation();
    console.log(this.step);
    if(this.step < 3){
      console.log(this.step);
      this.router.navigate(['student/signUp/step1'])
    }
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  goToNextStep(){
    //Falta.
   let date: string;
   if(!date){
     date = new Date(this.student.birthdate).toISOString();
     this.student.birthdate = date;
   }

   //console.log(this.student);

   this.http.signUp(this.student).subscribe(
      (data ) => {
        //console.log(data.message);

        console.log(data);

        let dataJson = JSON.parse(JSON.stringify(data));

        console.log("EL MENSAJE", dataJson.message);

         if(dataJson.message == "correctly saved"){

           this.popup.showSucccess('User corretly saved');
           this.router.navigate(['student/signUp/step4']);
         }
         else{
           this.popup.showError('Error with data or server');
         }
      },
      (error) => {
          this.popup.showError('Error with data or server');
      }
   );

  }

  goToPrevStep(){
    this.router.navigate(['student/signUp/step2'])
  }
}
