import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bbevenodd',
  templateUrl: './bbevenodd.component.html',
  styleUrls: ['./bbevenodd.component.css']
})
export class BbevenoddComponent implements OnInit {

  nums= new Array();
  i=0;
  constructor() { }

  getColor(n:number){
    return n%2==0 ? 'green':'red';
  }
  ngOnInit(): void {
  for(this.i=0;this.i<=100;this.i++)
  {
    this.nums.push(this.i);
  }
  }

}
