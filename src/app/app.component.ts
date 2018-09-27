import { Component } from '@angular/core';
import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';
import { ToastMessageModel } from 'ngx-bootstrap-alert-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'praxis-web';
   constructor(private bootstrapAlertService: BootstrapAlertService) {

   }

  messageList: ToastMessageModel[] = [];

  ngOnInit() {
        this.bootstrapAlertService.getAlertEvent().subscribe(r => {
          this.messageList.push(r);
      });
  }

}
