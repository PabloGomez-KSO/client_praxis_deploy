import { Injectable } from '@angular/core';
import { Student } from '../schemas/student';
import * as AWS from 'aws-sdk';

@Injectable()
export class storageVideoService {
  
/*
      uploadVideoToS3(file: any) {
          const filename = "video1";

          const AWSService = AWS;
          const region = 'us-east-1';
          const bucketName = 'praxisvideo';
          const IdentityPoolId = 'us-east-1:16967de0-49ab-421f-b76f-4d561f8b2879';
          //const file = videoInput.target.files[0];
         //Configures the AWS service and initial authorization
          AWSService.config.update({
            region: region,
            credentials: new AWSService.CognitoIdentityCredentials({
              IdentityPoolId: IdentityPoolId
            })
          });
        //adds the S3 service, make sure the api version and bucket are correct
          const s3 = new AWSService.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: bucketName}
          });
      //  //I store this in a variable for retrieval later
      //    this.image = file.name;
          s3.upload({ Key: filename, Bucket: bucketName, Body: file, ACL: 'public-read'}, function (err, data) {
           if (err) {
             console.log(err, 'there was an error uploading your file');
           }
     });
   }
*/

}
