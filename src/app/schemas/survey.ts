import {ArrayType} from '@angular/compiler';

export class Survey {
  constructor(
    public id: number,
    public date: Date,
    public tutorName: string,
    public sessionType:{
        virtual: boolean,
        faceToFace: boolean
    },
    public table1 = ArrayType,
    public table2 = ArrayType,
    public sessionWas: ArrayType,
    public obsAndSugg: string
  ) {  }
}