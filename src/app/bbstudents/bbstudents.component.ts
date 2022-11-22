import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bbstudents',
  templateUrl: './bbstudents.component.html',
  styleUrls: ['./bbstudents.component.css']
})
export class BbstudentsComponent implements OnInit {

  studentslist=new Array();

  constructor() {
    this.studentslist=[
      {
      firstName:"bhaskara sai", 
      lastName:"chitturi",
      mobile:"9059065724",
      education:"MCA"
      },
      {
      firstName:"amitava", 
      lastName:"ch",
      mobile:"9056065324",
      education:"BCA"
      },
      {
      firstName:"John", 
      lastName:"Doe",
      mobile:"0123456789",
      education:"Btech"
      },
      {
      firstName:"Alexa", 
      lastName:"amazon",
      mobile:"9059059051",
      education:"MBA"
      },
      {
      firstName:"Siri", 
      lastName:"Apple",
      mobile:"9876543210",
      education:"BBA"
      }
      ];

   }

  ngOnInit(): void {
  }

}
