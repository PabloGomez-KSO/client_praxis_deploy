import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Student } from '../../../schemas/student';
import { helperService } from '../../../services/helperService';

@Component({
  selector: 'app-finish-sign-up',
  templateUrl: './finish-sign-up.component.html',
  styleUrls: ['./finish-sign-up.component.css']
})

export class FinishSignUpComponent implements OnInit {

  public student;
  public step;

  constructor(private router: Router,private helperService: helperService) {
    this.student = this.helperService.getStudentOfSignUp();
    console.log("En el paso final" , this.helperService.getStudentOfSignUp() );

  }

  ngOnInit() {
    this.step = this.helperService.getStepValidation();
    console.log(this.step);
    if(this.step < 4){
      console.log(this.step);
      this.router.navigate(['student/signUp/step1'])
    }
  }


  goToNextStep(){
    this.router.navigate([''])
  }
}
