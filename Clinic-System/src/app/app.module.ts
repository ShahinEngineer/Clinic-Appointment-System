import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {MatDialogModule} from "@angular/material"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpErrorHandler} from './http-error.service'
import {MessageService} from './message.service'
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RestService} from  './rest.service';
import { CourseDialogComponentComponent } from './course-dialog-component/course-dialog-component.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
const routes: Routes = [
  { path: '',redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent},
   {path:'calculator',component:CalculatorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AppBarComponent,
    HomeComponent,
    CourseDialogComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
 
  ],
  entryComponents: [CalculatorComponent,CourseDialogComponentComponent],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
