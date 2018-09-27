import { Injectable } from '@angular/core';
import { Student } from '../schemas/student';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from '../../environments/environment';


@Injectable()
export class helperService {

   public studentSignUp: Student= new Student();
   public step: number=1;
   public navbar: Boolean = false;

   public  percentageLoading: number = 85;

   public urlVideoToShow: string;

   public constructor(/*private ref: ChangeDetectorRef**/){


   }

   public  bucket = new S3(
    {
       accessKeyId: 'AKIAIFCRRZ2ANLOZD2UA',
       secretAccessKey: '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',
       region: 'us-east-1'
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

          var valProgress = progress.loaded*100/progress.total;

          this.percentageLoading = valProgress;

          //this.ref.detectChanges();


          console.log("el porcentaje de la variable " , this.percentageLoading);

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
         Bucket: 'praxisvideo',
         Key: key,
       };
       var url = this.bucket.getSignedUrl('getObject', params);
       return url;
   }

}
