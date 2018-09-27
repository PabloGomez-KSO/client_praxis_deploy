import { Injectable } from '@angular/core';
import { Student } from '../schemas/student';
/*
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from '../../environments/environment';
*/
@Injectable()
export class admissionsService {
    students: [
        {
            name: 'carlos',
            contrasena: '1234567'
        },
        {
            name: 'arbe',
            contrasena: '123'
        },
        {
            name: 'santiago',
            contrasena: '123'
        },
        {
            usuario: 'ella',
            contrasena: '123'
        },
        {
            usuario: 'ellos',
            contrasena: '123'
        }
    ];
    getStudents() {
        return this.students;
    }

/*
   public studentSignUp: Student= new Student();
   public step: number=1;
   public navbar: Boolean = false;
   public urlVideoToShow: string;
  
   public  bucket = new S3(
     {
       accessKeyId: environment.accessKeyId,
       secretAccessKey: environment.secretAccessKey,
       region: environment.region
     }
   );
  
   setStudentOfSignUp(student: Student){
      this.studentSignUp = student;
   }

   getStudentOfSignUp(): Student{
      return this.studentSignUp;
   }

  setStepValidation(step: number) {
     this.step = step + 1;
     console.log(step);
   }

   getStepValidation(): number{
     return this.step;
   }

   uploadVideo(file: any, nameKey: string){
        let name: string = nameKey+".mp4";
        const params = {
          Bucket: 'praxisvideo',
          Key:  name,
          Body: file
        };
        this.bucket.upload(params).on("httpUploadProgress", (progress)=>{
          console.log(progress.loaded*100/progress.total)
        }).send(function (err, data) {
             if (err) {
               console.log('There was an error uploading your file: ', err);
               return false;
             }
              console.log('Video succesfully', data);
             return true;
        });
   }

   getFileUrl(key: String) {
       const params = {
         Bucket: environment.Bucket,
         Key: key,
       };
       var url = this.bucket.getSignedUrl('getObject', params);
       return url;
   }*/
}
