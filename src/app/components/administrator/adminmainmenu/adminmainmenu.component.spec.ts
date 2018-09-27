import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmainmenuComponent } from './adminmainmenu.component';

describe('AdminmainmenuComponent', () => {
  let component: AdminmainmenuComponent;
  let fixture: ComponentFixture<AdminmainmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmainmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmainmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
