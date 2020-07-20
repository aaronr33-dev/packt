import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule  } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule


      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
  it('should render the title in a mat-card-title tag', async (() => {
     const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
     const compiled = fixture.debugElement.nativeElement;
     const component = fixture.componentInstance;

     expect(compiled.querySelector('mat-card-title').textContent).toContain(component.title);
     }));

  it('should render username input', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input')[0]).toBeDefined();
    expect(compiled.querySelectorAll('input')[0].name).toEqual('username');
    expect(compiled.querySelectorAll('input')[0].type).toEqual('text');
  }));
  
  it('should render password input', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input')[1]).toBeDefined();
    expect(compiled.querySelectorAll('input')[1].name).toEqual('password');
    expect(compiled.querySelectorAll('input')[1].type).toEqual('text');
  }));

  it('should render username input', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input')[2]).toBeDefined();
    expect(compiled.querySelectorAll('input')[2].name).toEqual('email');
    expect(compiled.querySelectorAll('input')[2].type).toEqual('text');
  }));

  it('should be invalid when form empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    expect(component.signUpForm.valid).toBeFalse();
  }
   


});
