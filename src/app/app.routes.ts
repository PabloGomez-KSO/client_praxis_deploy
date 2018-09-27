import { RouterModule, Routes } from '@angular/router'
import { StudentinfoComponent } from './components/signUp/studentinfo/studentinfo.component';
import { RecordvideoComponent } from './components/signUp/recordvideo/recordvideo.component';
import { ValidatedataComponent } from './components/signUp/validatedata/validatedata.component';
import { LoginComponent } from './components/login/login.component';
import { FinishSignUpComponent } from './components/signUp/finish-sign-up/finish-sign-up.component';
import { MainmenuComponent } from './components/student/mainmenu/mainmenu.component';
import { AdminmainmenuComponent } from './components/administrator/adminmainmenu/adminmainmenu.component';
import { GradesComponent } from './components/student/grades/grades.component';
import { InformationComponent } from './components/administrator/information/information.component';
import { TeachermainmenuComponent } from './components/teacher/teachermainmenu/teachermainmenu.component';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';
import { LoginGuardService as LoginGuard } from './services/login-guard';

export const ROUTES: Routes = [

    /*Faltaria login */
    { path: 'student/login', component: LoginComponent, pathMatch: 'full' , canActivate: [LoginGuard]},
    { path: 'student/signUp/step1', component: StudentinfoComponent, canActivate: [LoginGuard] },
    { path: 'student/signUp/step2', component: RecordvideoComponent, canActivate: [LoginGuard]},
    { path: 'student/signUp/step3', component:  ValidatedataComponent, canActivate: [LoginGuard] },
    { path: 'student/signUp/step4', component:  FinishSignUpComponent, canActivate: [LoginGuard] },
    { path: 'student/dashboard', component:  MainmenuComponent, canActivate: [AuthGuard]},
    { path: 'student/dashboard/grades', component: GradesComponent, canActivate: [AuthGuard] },
    { path: 'admin/admissions', component: AdminmainmenuComponent, canActivate: [AuthGuard]},
    { path: 'admin/admissions/information', component: InformationComponent, canActivate: [AuthGuard]},
    { path: 'teacher/dashboard', component: TeachermainmenuComponent, canActivate: [AuthGuard]},
    { path: '', pathMatch: 'full', redirectTo: 'student/login' },
    { path: '**', pathMatch: 'full', redirectTo: 'student/login' }
];
