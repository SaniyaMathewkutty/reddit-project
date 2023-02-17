import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit 
{
  // Declare variableNames:type
  votes:number;
  title:string;
  link:string;

  // Initialise the variables in the constructor
  constructor() {
    this.title="Angular";
    this.link="https://angular.io";
    this.votes=10;
   }

  ngOnInit() { }

}
