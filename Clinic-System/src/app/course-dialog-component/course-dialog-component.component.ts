import { Component, OnInit ,ViewEncapsulation,Inject} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Course} from './bookingData'
import {AppBarComponent} from '../app-bar/app-bar.component'
import {RestService} from '../rest.service'
import { ClinicService } from '../home/clinic.services';
@Component({
  selector: 'app-course-dialog-component',
  templateUrl: './course-dialog-component.component.html',
  styleUrls: ['./course-dialog-component.component.css']
})


export class CourseDialogComponentComponent implements OnInit {
  public name:string;
  public email:string;
  public phone:number;
  public date:Date;
  public data:any
  public form: FormGroup;
  public description:string;
  submitted = false;
   id:number
   clinicForm:FormGroup
    constructor(
      public rest:RestService,public dialogRef: MatDialogRef<CourseDialogComponentComponent>,
      @Inject(MAT_DIALOG_DATA)data,private fb:FormBuilder){
        this.description=data.name;
        this.id=data.id;

    }

  ngOnInit() {
    /*this.clinicForm=new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      phone:new FormControl(),
      date:new FormControl(),
    })*/
    this.clinicForm=this.fb.group({
      name:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone:['',[Validators.required,Validators.min(3),Validators.pattern('^[0-9]*$')]],
      date:['',Validators.required],
    })
    
  }
  get f() { return this.clinicForm.controls; }

  onSubmit(){
     this.submitted = true;

        // stop here if form is invalid
        if (this.clinicForm.invalid) {
            return;
        }
    
        alert('SUCCESS!! :-)')
        this.bookingDate()
        this.close()
      
  }
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}
changePosition() {
  this.dialogRef.updatePosition({ top: '50px', left: '50px' });
}
 bookingDate(){
this.data={
  id_clinic:this.id,
  full_name:this.name,
  mobile:this.phone,
  email:this.email,
  appointment_date:this.date,
  approved:0,
}
this.rest.addProduct(this.data).subscribe((result)=>{
  console.log(result)
  
},(err)=>{
  console.log(err)
})

}
}
