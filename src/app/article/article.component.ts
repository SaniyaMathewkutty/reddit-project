import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article', // need to add this to app.component.html for it to be displayed : <app-article></app-article>
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit 
{
  // Declare variableNames:type (properties)
  votes:number;
  title:string;
  link:string;

  // Initialise the variables in the constructor
  constructor() {
    this.title="Angular"; // "this" refers to the properties above
    this.link="https://angular.io";
    this.votes=10;
   }

  ngOnInit() { }

  voteUp():boolean // this and voteDown() are returning booleans (as false) simply to fix the issue or the page refreshing when these methods are called
  {
    this.votes ++;
    return false;
  }
  voteDown(): boolean
  {
    this.votes --;
    return false;
  }

}
