import { Component, OnInit } from '@angular/core';
import { Article } from './article.model'; // import article.model.ts

@Component({
  selector: 'app-article', // need to add this to app.component.html for it to be displayed : <app-article></app-article>
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit 
{
  // Initialise property article from article.model.ts
  article:Article;

  // Initialise the property in the constructor
  constructor() {
    // Create a new object of type Article and pass in some values
    this.article = new Article("Angular", "https://angular.io", 10); 
   }

  ngOnInit() { }

  voteUp():boolean
  {
    this.article.voteUp; // referring votes to article.model.ts' method for vote up
    return false;
  }
  voteDown():boolean
  {
    this.article.voteDown;
    return false;
  }

}
