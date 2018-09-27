import { Injectable } from '@angular/core';
import { Student } from '../schemas/student';


@Injectable()
export class generalService {

    public statusNavBarInicial: boolean = false; //Por defecto esta se muestra siempre.
    public statusNavBarMenuStudent: boolean = true;


    public setstatusNavBarInicial(status: boolean){
        this.statusNavBarInicial = status;
    }

    public setstatusNavBarMenuStudent(status: boolean){
        this.statusNavBarMenuStudent= status;
    }

    public getstatusNavBarInicial(){
        return this.getstatusNavBarInicial;
    }

    public getstatusNavBarMenuStudent(){
        return this.getstatusNavBarMenuStudent;
    }
}
