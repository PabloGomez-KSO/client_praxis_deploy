import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute} from '@angular/router';
import { generalService } from '../../../services/generalService';
import { httpService } from '../../../services/httpService';
import { Session } from '../../../schemas/session';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Survey } from '../../../schemas/survey';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {


  public grades: string = 'grades 1';
  public attendance: string = 'attendance 2';
  public survey: string = 'survey 3';
  public tutors = ['David', 'Lia', 'Raul', 'Diego'];
  public submitted = false;
  

  public date = new Date();

  public sessionT = {
    virtual: true,
    faceToFace: false
  }

  public sessions: any = [];

  public sessionW = [{ value: 'Satisfactory', name: 'sessionWas' }, { value: 'Unsatisfactory', name: 'sessionWas' }];

  private surveyForm: FormGroup;

  //model = new Survey(1, this.date, this.tutors[0], this.sessionT, this.table1, this.table2, this.sessionW, 'Good session');

  constructor(private router: Router, private generalService: generalService, private http: httpService) {
         this.generalService.statusNavBarInicial = true;
         this.generalService.statusNavBarMenuStudent = false;


         this.http.getSessions().subscribe((data) => {
           
            const datos =JSON.parse(JSON.stringify(data));

            console.log(datos.length);

            this.sessions = datos;

            console.log(this.sessions.length);

            for(let i = 0; i < this.sessions.length; i++){
                console.log(this.sessions[i].name);
            }

            this.ngOnInit();


         } ,
         (error) => {
             console.log(error);
         }
       )

  }

  ngOnInit() {
  }


}
