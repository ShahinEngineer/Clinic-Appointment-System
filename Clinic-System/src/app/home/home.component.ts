import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core'


import {Clinic} from './Clinic'
import {ClinicService} from './clinic.services'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clinic:Clinic[]
  editClinic:Clinic
  constructor(private clinicService:ClinicService) { 
   
  }

  ngOnInit() {
    this.getClinic()
  }

  getClinic():void{
    this.clinicService.getClinic().subscribe(task =>(this.clinic = task))
  }
}
