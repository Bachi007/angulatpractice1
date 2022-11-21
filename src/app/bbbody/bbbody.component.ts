import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-bbbody',
  templateUrl: './bbbody.component.html',
  styleUrls: ['./bbbody.component.css']
})
export class BbbodyComponent implements OnInit {

  constructor() { }
  img1="https://dri.es/files/images/blog/james-gosling.jpg";

  username=new FormControl();

  changevalue(){
    this.username.setValue("Anudip Foundation")
  }

  ngOnInit(): void {
  }

}
