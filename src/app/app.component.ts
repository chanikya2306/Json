import { Component, OnInit } from '@angular/core';
import data from '../assets/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'topicjson';
  display:any;
  array:any=[]
  showitems:any
  constructor(){
    this.display = data;
    console.log(this.display)
    this.array.push(this.display)
  }
  ngOnInit(): void {
  }
}
