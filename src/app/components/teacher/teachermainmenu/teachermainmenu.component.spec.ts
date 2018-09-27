import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachermainmenuComponent } from './teachermainmenu.component';

describe('TeachermainmenuComponent', () => {
  let component: TeachermainmenuComponent;
  let fixture: ComponentFixture<TeachermainmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachermainmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachermainmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
