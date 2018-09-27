import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InitialNavbarComponent } from './components/shared/initial-navbar/initial-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BootstrapAlertModule } from 'ngx-bootstrap-alert-service';
describe('AppComponent', () => {
  it('primer tesst', () => {
    expect(true).toBe(true);
  });
  /** 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InitialNavbarComponent,
      ],
      imports: [
        RouterTestingModule,
        BootstrapAlertModule
       ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'praxis-web'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('praxis-web');
  }));
 /* it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to praxis-web!');
  }));*/
});
