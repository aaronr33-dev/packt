import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvalidPasswordDirective } from './invalid-password.directive';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule  } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    InvalidPasswordDirective
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,BrowserAnimationsModule, ReactiveFormsModule,
    MatInputModule, MatButtonModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
