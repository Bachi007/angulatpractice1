import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bbdirectivies',
  templateUrl: './bbdirectivies.component.html',
  styleUrls: ['./bbdirectivies.component.css']
})
export class BbdirectiviesComponent implements OnInit {
 num=6;
 nums=new Array();
 i=0;
  constructor() { }

  ngOnInit(): void {
  
    for(this.i=0;this.i<=100;this.i++){
      this.nums.push(this.i);
    }

  }

}
