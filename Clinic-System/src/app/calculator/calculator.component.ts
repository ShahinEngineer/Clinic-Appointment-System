import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service'
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CourseDialogComponentComponent} from "../course-dialog-component/course-dialog-component.component";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
public number1:number;
public number2:number;
public result:number;
products:any = [];
  constructor(public rest:RestService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getProducts()
  }
    public Add(){
      this.result=this.number1+this.number2;
    }
    getProducts() {
      this.products = [];
      this.rest.getProducts().subscribe((data: {}) => {
        this.products = data;

      });
      console.log(this.products)
    }

    openDialosg() {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(CourseDialogComponentComponent, dialogConfig);
  }

  openDialog(name:string,id:number): void {
    const dialog=new MatDialogConfig();

    dialog.data={
      name:name,
      id:id
    }
    dialog.panelClass='my-panel'
    const dialogRef = this.dialog.open(CourseDialogComponentComponent, dialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    }); 
  }

}
