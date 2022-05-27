import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data.json';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  array:any= [];
  constructor() { 
  }
  ngOnInit(): void {
    console.log(data);
   this.array.push(data);
  }
}