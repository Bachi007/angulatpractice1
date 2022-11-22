import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bbbikes',
  templateUrl: './bbbikes.component.html',
  styleUrls: ['./bbbikes.component.css']
})
export class BbbikesComponent implements OnInit {
  
  bikelist=new Array();
  selectedCompany:string="default";
  constructor() { 
    this.bikelist=[

      {bikeName:"R1250GSA",company:"BMW"},
      {bikeName:"Tiger 800",company:"Triumph"},
      {bikeName:"Multistarda",company:"Ducati"},
      {bikeName:"African twin",company:"Honda"},
      ];
  }

  ngOnInit(): void {
  }

}
