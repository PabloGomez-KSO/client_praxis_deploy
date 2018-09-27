import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { helperService } from '../../../services/helperService';
import { httpService } from '../../../services/httpService';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';

import { FinishSignUpComponent } from './finish-sign-up.component';

describe('FinishSignUpComponent', () => {
  let component: FinishSignUpComponent;
  let fixture: ComponentFixture<FinishSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishSignUpComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [
        helperService,
        httpService,
        HttpClient,
        HttpHandler,
        BootstrapAlertService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
